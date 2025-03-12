import ChampionDetail from "@/components/champions/ChampionDetail"
import { fetchChampionDetail } from "@/utils/serverApi"

type Props = {
    params: {
        id: string
    }
}

export default async function ChampionDetailPage({ params }: Props){
    const { id } = params
    const championDetail = await fetchChampionDetail(id)

    return ( 
        <ChampionDetail
            championDetail={championDetail.data}
            version ={championDetail.version}
        />
    )
}