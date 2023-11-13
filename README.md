## CS501 - Fall 2023

This is the CS501 Research Credit Fall 2023 repository lead by Prof. Will Braynen. 

## Folders

- sprint1 
	- Supabase implementaions(localhost) 
		- `GET /users`
		- `GET /trips` 
		- `GET /user/:id` 
		- `GET user/:id/travel-buddies`
			- Returns a list of user IDs of all the users have gone on trips with this particular user.  That is, this endpoint returns a list of the given user’s travel buddies.
- sprint2 
	- mongoDB implementaions(localhost)
		- `GET /users` 
		- `GET /trips`
		- `GET /user/:id`
		- `GET user/:id/travel-buddies`
		- `POST /createUser` 
		- `POST /createTrip`
	
	- dynamoDB implementaions(localhost)
		- `GET /users` 
		- `GET /trips`
		- `GET /user/:id`
		- `GET user/:id/travel-buddies`
		- `POST /createUser` 
		- `POST /createTrip`
		- `POST /createRelation`