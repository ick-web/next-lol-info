import ChampionDetail from "@/components/champions/ChampionDetail"
import { fetchChampionDetail } from "@/utils/serverApi"

type Props = {
    params: {
        id: string
    }
}

export const generateMetadata = async ({ params }: Props) => {
    const { id } = params
    const data = await fetchChampionDetail(id)
    const champion = data.data
    const version = data.version
  
    return {
      title: `${champion.name} - ${champion.title}`,
      description: champion.blurb,
      image: `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`,
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