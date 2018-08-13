import { Serif } from "@artsy/palette"
import React, { Component, SFC } from "react"
import { BorderBox, Box } from "Styleguide/Elements/Box"
import { Flex } from "Styleguide/Elements/Flex"
import { Image } from "Styleguide/Elements/Image"
import { Separator } from "Styleguide/Elements/Separator"

export interface TransactionSummaryProps {}

export class TransactionSummary extends Component<TransactionSummaryProps> {
  render() {
    return (
      <>
        <BorderBox p={3} flexDirection="column">
          <ItemSummary />
          <Separator mb={2} mt={3} />
          <PriceSummary />
        </BorderBox>
      </>
    )
  }
}

interface ItemSummaryProps {}

class ItemSummary extends Component<ItemSummaryProps> {
  render() {
    return (
      <Flex flexDirection="row">
        <Box height="auto">
          <Image
            src={
              "https://d32dm0rphc51dk.cloudfront.net/wefz0H1Ewk3KjdwXbyTIbQ/medium.jpg"
            }
            width="55px"
            mr={1}
          />
        </Box>
        <Flex flexDirection="column">
          <Serif size="2" weight="semibold" color="black60">
            Francesca DiMattio
          </Serif>
          <Serif italic size="2" color="black60">
            The Fox and the Hound, 2018
          </Serif>
          <Serif size="2" color="black60">
            Salon 94
          </Serif>
          <Serif size="2" color="black60">
            New York, NY
          </Serif>
        </Flex>
      </Flex>
    )
  }
}

interface PriceSummaryProps {}

class PriceSummary extends Component<PriceSummaryProps> {
  render() {
    // return (
    //   <Flex flexDirection="row" justifyContent="space-between">
    //     <Flex flexDirection="column" align="left">
    //       <Serif size="3" color="black60">
    //         Price
    //       </Serif>
    //     </Flex>

    //     <Flex flexDirection="column" align="right">
    //       <Serif size="3" color="black60" textAlign="right">
    //         $2,500.00
    //       </Serif>
    //     </Flex>
    //   </Flex>
    // )

    return (
      <>
        <PriceSummaryRow />
      </>
    )
  }
}

interface RowItemProps {}

const PriceSummaryRow: SFC<RowItemProps> = props => (
  <Flex flexDirection="row" justifyContent="space-between">
    <Serif size="3" color="black60">
      Price
    </Serif>
    <Serif size="3" color="black60" textAlign="right" display="inline">
      $2,500.00
    </Serif>
  </Flex>
)
