/**
 * TODO: This is the actual implementation which is generic and ready to be
 *       extracted.
 */

import React from "react"

const ResponsiveContext = React.createContext({})

export type MediaQueries<M extends string = string> = { [K in M]: string }
export type MediaQueryMatchers = { [key: string]: MediaQueryList }
export type MediaQueryMatches<M extends string = string> = { [K in M]: boolean }

export interface ResponsiveProviderProps<M extends string> {
  mediaQueries: MediaQueries<M>
  initialMatchingMediaQueries?: M[]
  children: React.ReactNode
}

export interface ResponsiveProviderState {
  mediaQueryMatchers?: MediaQueryMatchers
  mediaQueryMatches: MediaQueryMatches
}

const shallowEqual = (a: MediaQueryMatches, b: MediaQueryMatches) => {
  for (let key in a) {
    if (a[key] !== b[key]) return false
  }
  return true
}

export function createResponsiveComponents<M extends string>() {
  const Consumer: React.ComponentType<
    React.ConsumerProps<MediaQueryMatches<M>>
  > =
    ResponsiveContext.Consumer
  return {
    Consumer,
    Provider: class ResponsiveProvider extends React.Component<
      ResponsiveProviderProps<M>,
      ResponsiveProviderState
    > {
      constructor(props: ResponsiveProviderProps<M>) {
        super(props)
        let mediaQueryMatchers: MediaQueryMatchers
        let mediaQueryMatches: MediaQueryMatches

        if (this.isSupportedEnvironment()) {
          mediaQueryMatchers = this.setupMatchers(props.mediaQueries)
          mediaQueryMatches = this.checkMatchers(mediaQueryMatchers)
        } else {
          mediaQueryMatches = Object.keys(props.mediaQueries).reduce(
            (matches, key: M) => ({
              ...matches,
              [key]:
                !!props.initialMatchingMediaQueries &&
                props.initialMatchingMediaQueries.includes(key),
            }),
            {}
          )
        }

        this.state = {
          mediaQueryMatchers,
          mediaQueryMatches,
        }
      }

      isSupportedEnvironment = () => {
        return (
          typeof window !== "undefined" &&
          typeof window.matchMedia !== "undefined"
        )
      }

      /**
       * Create an array of media matchers that can validate each media query
       */
      setupMatchers = (mediaQueries: MediaQueries): MediaQueryMatchers => {
        return Object.keys(mediaQueries).reduce(
          (matchers, key) => ({
            ...matchers,
            [key]: window.matchMedia(mediaQueries[key]),
          }),
          {}
        )
      }

      /**
       * Uses the matchers to build a map of the states of each media query
       */
      checkMatchers = (
        mediaQueryMatchers: MediaQueryMatchers
      ): MediaQueryMatches => {
        return Object.keys(mediaQueryMatchers).reduce(
          (matches, key) => ({
            ...matches,
            [key]: mediaQueryMatchers[key].matches,
          }),
          {}
        )
      }

      /**
       * The function that will be called any time a media query status changes
       */
      mediaQueryStatusChangedCallback = () => {
        this.setState({
          mediaQueryMatches: this.checkMatchers(this.state.mediaQueryMatchers),
        })
      }

      // Lifecycle methods

      componentDidMount() {
        if (this.state.mediaQueryMatchers) {
          const { mediaQueryStatusChangedCallback } = this
          Object.values(this.state.mediaQueryMatchers).forEach(matcher => {
            matcher.addListener(mediaQueryStatusChangedCallback)
          })
        }
      }

      componentWillUnmount() {
        if (this.state.mediaQueryMatchers) {
          const { mediaQueryStatusChangedCallback } = this
          Object.values(this.state.mediaQueryMatchers).forEach(matcher =>
            matcher.removeListener(mediaQueryStatusChangedCallback)
          )
        }
      }

      shouldComponentUpdate(
        nextProps: Readonly<ResponsiveProviderProps<M>>,
        nextState: Readonly<ResponsiveProviderState>
      ) {
        if (!this.state.mediaQueryMatchers) return false
        if (nextProps.children !== this.props.children) return true
        if (
          shallowEqual(
            this.state.mediaQueryMatches,
            nextState.mediaQueryMatches
          )
        ) {
          return false
        }
        return true
      }

      render() {
        return (
          <ResponsiveContext.Provider value={this.state.mediaQueryMatches}>
            {this.props.children}
          </ResponsiveContext.Provider>
        )
      }
    },
  }
}
