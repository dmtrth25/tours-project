"use client"

import { FC, useMemo } from "react"
import { Reservation } from "@prisma/client"

import { SafeListing, SafeUser } from "@/app/types"
import { categories } from "@/app/components/navbar/Categories"
import Container from "@/app/components/Container"
import ListingHead from "@/app/components/listings/ListingHead"

interface ListingClientProps {
  reservations?: Reservation[]
  listing: SafeListing & {
    user: SafeUser
  }
  currentUser?: SafeUser | null
}

const ListingClient: FC<ListingClientProps> = ({ listing, currentUser }) => {
  const category = useMemo(() => {
    return categories.find((item) => (item.label = listing.category))
  }, [listing.category])

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  )
}

export default ListingClient
