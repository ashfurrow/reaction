import React from "react"
import styled from "styled-components"
import { space, width } from "styled-system"
import { Articles } from "./Articles"
import { AuctionResults } from "./AuctionResults"
import { CV } from "./CV"
import { Shows } from "./Shows"
import { RelatedArtists } from "./RelatedArtists"
import { Box } from "../../Elements/Box"

// import { Overview } from "./Overview"
// import { Slider } from "../../Components/Slider"

import { Sans, Serif } from "@artsy/palette"
import { Grid, Col, Row, media } from "../../Elements/Grid"
import { Button } from "../../Elements/Button"
import { Flex } from "../../Elements/Flex"
import { Tabs } from "../../Components/Tabs"
import { SelectedExhibitions } from "../../Components/SelectedExhibitions"
import { ReadMore } from "../../Components/ReadMore"
import { Toggle } from "../../Components/Toggle"
import { Checkbox } from "../../Elements/Checkbox"
import { Radio } from "../../Elements/Radio"
import { ArtworkGridExample } from "../../../Components/__stories__/ArtworkGrid.story"
import { SmallSelect } from "../../Elements/Select"
import { CurrentEvent } from "../../Components/Artist/CurrentEvent"
import { MarketInsights } from "../../Components/MarketInsights"
import { insights } from "../../Components/__stories__/MarketInsight.story"
import { exhibitions } from "../../Components/__stories__/SelectedExhibitions.story"

export class Artist extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col />
        </Row>
        <Row>
          <Col sm={10} mt={6}>
            <ArtistMetadata>
              <Serif size="10">Donald Judd</Serif>
              <Flex>
                <Serif size="3">Brazilian, 1886-1973</Serif>
                <Serif size="3">4,321 followers</Serif>
              </Flex>
            </ArtistMetadata>
          </Col>
          <Col sm={2} mt={7}>
            <FollowButton variant="primaryBlack">Follow</FollowButton>
          </Col>
        </Row>
        <Row>
          <Col mt={5}>
            <Tabs
              labels={[
                "Overview",
                "CV",
                "Articles",
                "Shows",
                "Auction Results",
              ]}
            >
              {({ activeTab }) => {
                switch (activeTab.label) {
                  case "Overview":
                    return (
                      <div>
                        <div>
                          <Flex mt={5}>
                            <Flex flexDirection="column" pr={4} width="70%">
                              <Box mb={3}>
                                <MarketInsights insights={insights} />
                              </Box>
                              <SelectedExhibitions
                                expanded
                                exhibitions={exhibitions}
                              />
                              <ArtistBio size="3" my={3}>
                                {/* FIXME: Add truncated character count feature */}
                                <ReadMore maxLi4eCount={5}>
                                  Donald Judd, widely regarded as one of the
                                  most significant American artists of the
                                  post-war period, is perhaps best-known for the
                                  large-scale outdoor installations and long,
                                  spacious interiors he designed in Marfa,
                                  Texas. His oeuvre has come to define what has
                                  been referred to as Minimalist art—a label the
                                  artist strongly objected to. His sculptures
                                  and installations, constructed out of
                                  industrial materials such as Plexiglas,
                                  concrete, and steel and arranged in precise
                                  geometric shapes, were intended to emphasize
                                  the purity of the objects themselves rather
                                  than any symbolic meaning they might have—“the
                                  simple expression of complex thought,” said
                                  Judd. His particular interest in architecture
                                  led him to design both the sculptures and the
                                  spaces in which they would be contained,
                                  influencing a generation of artists and
                                  designers from Anish Kapoor to David
                                  Batchelor.
                                </ReadMore>
                              </ArtistBio>
                              <GeneFamily my={3}>
                                <Sans size="2" weight="medium">
                                  Gene family name
                                </Sans>
                                {[
                                  "Silhouettes",
                                  "Intersectionality",
                                  "Trauma and Struggle",
                                  "Identity Politics",
                                  "Racial and Ethnic Identity",
                                  "Allegory",
                                  "Paper Cut-outs",
                                  "Sex",
                                ].map((gene, index, list) => {
                                  const geneDivider =
                                    index < list.length - 1 ? "," : ""

                                  return (
                                    <GeneFamilyItem
                                      href="#"
                                      className="noUnderline"
                                      mr={2}
                                    >
                                      {gene}
                                      {geneDivider}
                                    </GeneFamilyItem>
                                  )
                                })}
                              </GeneFamily>

                              <Sans size="2" color="black60">
                                <a href="#">Consign</a> a work by this artist.
                              </Sans>
                            </Flex>
                            <Flex width="30%">
                              <CurrentEvent
                                src="https://picsum.photos/300/200/?random"
                                label="Currently on view"
                                title="Brancusi: Pioneer of American Minimalism"
                                gallery="Paul Kasmin Gallery"
                                location="Miami"
                                date="May 3 – 21, 2018"
                              />
                            </Flex>
                          </Flex>
                        </div>
                        <div>
                          <ArtworkBrowser mt={6}>
                            <Sidebar width="30%" mr={4}>
                              <Toggle label="Purchase type" expanded disabled>
                                <Flex justifyContent="space-between">
                                  <Checkbox>For sale</Checkbox>
                                </Flex>
                              </Toggle>
                              <Toggle label="Medium" expanded>
                                <Radio>Painting</Radio>
                                <Radio>Sculpture</Radio>
                              </Toggle>
                              <Toggle label="Gallery" />
                              <Toggle label="Institution" />
                              <Toggle label="Time period" />
                            </Sidebar>

                            <ArtworkGrid
                              width="70%"
                              flexDirection="column"
                              alignItems="flex-end"
                            >
                              <SmallSelect pb={4} pr={3} />
                              <ArtworkGridExample artistID="pablo-picasso" />
                            </ArtworkGrid>
                          </ArtworkBrowser>
                        </div>
                      </div>
                    )
                  case "CV":
                    return <CV />
                  case "Articles":
                    return <Articles />
                  case "Shows":
                    return <Shows />
                  case "Auction results":
                    return <AuctionResults />
                  case "Related artists":
                    return <RelatedArtists />
                  default:
                    return <div />
                }
              }}
            </Tabs>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const FollowButton = styled(Button)`
  float: right;

  ${media.xs`
    float: left;
  `};
`

const ArtistBio = styled(Flex)``

const GeneFamily = styled.div`
  ${space};
`
const GeneFamilyItem = styled.a`
  display: inline-block;
  ${space};
`

const ArtworkBrowser = styled(Flex)``
const Sidebar = styled.div`
  ${space};
  ${width};
`
const ArtworkGrid = styled(Flex)``

const ArtistMetadata = styled.div``
const Details = styled.div``
const DetailItem = styled.div``
const Tabber = styled.div``
const TabNav = styled.div`
  display: flex;
`
const Tab = styled.div`
  cursor: pointer;
  padding: 20px;
  padding-left: 0;
  text-decoration: underline;
`
const TabContent = styled.div``
const Category = styled.div``
const CategoryLarge = styled.div``
const RecentlyViewed = styled.div``
const Footer = styled.div``
