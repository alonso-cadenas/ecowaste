/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
