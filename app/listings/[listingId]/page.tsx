import getCurrentUser from "@/app/actions/getCurrentUser"
import getListingById from "@/app/actions/getListingById"

import Empty from "@/app/components/Empty"
import OnlyClient from "@/app/components/OnlyClient"

import ListingClient from "./ListingClient"

interface IParams {
  listingId?: string
}

// it's server component here (don't use NextPage)
const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()

  if (!listing) {
    return (
      <OnlyClient>
        <Empty />
      </OnlyClient>
    )
  }

  return (
    <OnlyClient>
      <ListingClient listing={listing} currentUser={currentUser} />
    </OnlyClient>
  )
}

export default ListingPage
