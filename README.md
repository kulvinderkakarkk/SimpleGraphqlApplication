# SimpleGraphqlApplication
This application uses GraphQL to insert and get elements in an item object. This repository just demonstrates the simple working of GraphQL API in nodejs. 
Item class has many properties such as:

Parameter | Description | Mandatory/ Not Mandatory (NM) | Type |
--|--|--| --|
ItemName | Name of the item to be inserted | Mandatory | String |
Price | Price of the above Item | Mandatory | Not Mandatory | Integer |
Category | Category in which the item falls. It only has to be one of MBOILE, PC, KITCHEN APPLIANCE, OTHER HARDWARE | NOT MANDATORY | ENUM |
Description | A general Description of the item | NOT MANDATORY | String |
Reviews | Individual Reviews of an item. Contains two sub-variables: Name (String) and Review (Integer)  | NOT MANDATORY | Object |

TECHNOLOGIES USED: NODEJS & GraphQL API

## STEPS TO START THE PROJECT
- Clone the project and cd into the directory.
- Run npm install
- Start graphql server on http://localhost:8082/graphql

example query:
//
mutation {
  createItem(input: {
    ItemName:"Apple",
    Price:45000
    Description:"great"
    Reviews:[{
      Name:"IPHONE",
      Rating:4
    }]
    
  }) {
    id,
    ItemName,
    Price,
    Category,
    Description,
    Reviews {
      Name
      Rating
    }
  } 
}
//
