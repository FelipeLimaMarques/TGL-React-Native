import React, { useEffect } from 'react'
import * as actions from '../../../../store/actions'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import Layout from '../../../../components/UI/Layout'
import TabNavContainer from '../../../../components/UI/TabNavContainer'
import Filters from '../../../../components/Filters'
import GameCards from '../../../../components/GameCards'
import Header from '../../../../components/Header'

export default function RecentGames() {
    const dispatch = useAppDispatch()
    const types = useAppSelector(state => state.games.types)
    const filtered = useAppSelector(state => state.bets.filtered)
    const filterIds = useAppSelector(state => state.bets.filterIds)

    useEffect(() => {
        dispatch(actions.fetchUserData())
        return () => {}
    }, [])

    const handleFilter = (id: number) => {
        dispatch(actions.filterBets(id))
    }

    return (
        <Layout>
            <Header />
            <TabNavContainer>
                <Filters types={types} handlePress={handleFilter} filterIds={filterIds} />
                <GameCards filtered={filtered} />
            </TabNavContainer>
        </Layout>
    )
}
