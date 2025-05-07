import { Flex } from "@chakra-ui/react";

import Pokedex from './pokedex.tsx'

type LayoutProps = {
}

const Layout = ({ }: LayoutProps) => {

    return (
        <Flex >
            <Flex id="sidebar">

            </Flex>
            <Flex id="container">
                <Pokedex />
            </Flex>
        </Flex>
    )
}

export default Layout;