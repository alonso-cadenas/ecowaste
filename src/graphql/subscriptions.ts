/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
