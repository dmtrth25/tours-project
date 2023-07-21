import Container from "./components/Container"
import Empty from "./components/Empty"
import OnlyClient from "./components/OnlyClient"

const Home = () => {
  const isEmpty = true

  if (isEmpty) {
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
            <div>Feature list</div>
          </div>
        </Container>
      </OnlyClient>
    </>
  )
}

export default Home
