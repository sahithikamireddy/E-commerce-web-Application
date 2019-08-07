# Cannopy Code Test

Welcome to the code test and congratulations on getting this far! You're one step closer to joining the Cannopy team and we're more than excited to potentially have you on board.

This code test evaluates your skills based on the following -
* Experience with `node.js`, `angular`, `postgres` and `docker`
* TDD methodologies
* Application design 
* Critical thinking and innovation


## How this works?
---
This code base, split into a server-side and a client-side application is the skeleton for a Cannabis e-commerce application.

Three entities have been identified -
* **Strains** - Different varieties of the Cannabis plant containing *Sativa*, *Indica*, *Hybrid* etc., (For example: Blue Dream is a Hybrid strain and Purple Kush is an Indica strain)
* **Batches** - Products created out of these strains in different batches or quantities
* **Orders** - Orders of different batches of strains

### Strains
| ID  | Name  | Type  |
|---|---|---|
|  1 | Blue Dream  | Hybrid  |
|  2 | Purple Kush  | Indica  |
|  3 | Sour Diesel  | Sativa  |

### Batches
| ID  | StrainID  | Type | Size  | Quantity |
|---|---|---|---|---|
|  1 | 1  |  Budder | 1g | 10
|  2 | 2  | Live Resin  |  0.5g | 100
|  3 | 3  | Nug cones  | 1 each | 20


MVC (Model, View and Controller) for a couple of these entities and corresponding tests for each of those entities already exist in this application.

You're **required** to do the following -
1. Create one architectural artifact explaining how you would design a very simplistic e-commerce application involving (but not limited to) the above identified entities
2. Create docker containers to run the API, database and the client-side application
3. Fix the existing code 
4. Create an MVC for the other entity along with appropriate tests to complement your outlined architectural artifact.

*Note: Your application will need to be scalable, so please consider any edge cases and design accordingly.* 

*Hint: You can use https://draw.io to create your architectural artifact*

## What can you do with this code?
---

You can do pretty much anything you want. 

We expect you to -

- Take ownership of the code
- Be innovative
- Think scalability
- Change existing models and create additional models if you have to
- Fix anything you'd like to
- Install additional `npm` packages if you have to
- Add any new features as you see fit for an e-commerce application of this type

But whatever you do, try not to spend more than **90 minutes** on this code test.

Good luck!

:smiley: :zap: :computer: