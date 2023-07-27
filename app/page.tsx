import getCurrentUser from "./actions/getCurrentUser"
import getListings from "./actions/getListings"

import Container from "./components/Container"
import Empty from "./components/Empty"
import OnlyClient from "./components/OnlyClient"
import ListingCard from "./components/listings/ListingCard"

const Home = async () => {
  const listings = await getListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <OnlyClient>
        <Empty showReset />
      </OnlyClient>
    )
  }
  return (
    <>
      <OnlyClient>
        <Container>
          <div
            className="
            pt-24
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
          >
            {listings.map((item: any) => {
              return (
                <ListingCard
                  key={item.id}
                  data={item}
                  currentUser={currentUser}
                />
              )
            })}
          </div>
        </Container>
      </OnlyClient>
    </>
  )
}

export default Home
