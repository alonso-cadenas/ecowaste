/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      description
      imageUrl
      category
      alternatives
      locationId
      createdAt
      updatedAt
      owner
      location {
        id
        name
        description
        street
        city
        state
        zipCode
        country
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        imageUrl
        category
        alternatives
        locationId
        createdAt
        updatedAt
        owner
        location {
          id
          name
          description
          street
          city
          state
          zipCode
          country
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const searchItems = /* GraphQL */ `
  query SearchItems(
    $filter: SearchableItemFilterInput
    $sort: SearchableItemSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchItems(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        description
        imageUrl
        category
        alternatives
        locationId
        createdAt
        updatedAt
        owner
        location {
          id
          name
          description
          street
          city
          state
          zipCode
          country
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      total
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      description
      street
      city
      state
      zipCode
      country
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        street
        city
        state
        zipCode
        country
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
