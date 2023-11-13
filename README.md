## CS501 - Fall 2023

This is the CS501 Research Credit Fall 2023 repository lead by Prof. Will Braynen. 

## Folders

- **sprint1** 
	- _Supabase implementaions(localhost)_ 
		- `GET /users`
		- `GET /trips` 
		- `GET /user/:id` 
		- `GET user/:id/travel-buddies`

- **sprint2** 
	- _mongoDB implementaions(localhost)_
		- `GET /users` 
		- `GET /trips`
		- `GET /user/:id`
		- `GET user/:id/travel-buddies`
		- `POST /createUser` 
		- `POST /createTrip`
	
	- _dynamoDB implementaions(localhost)_
		- `GET /users` 
		- `GET /trips`
		- `GET /user/:id`
		- `GET user/:id/travel-buddies`
		- `POST /createUser` 
		- `POST /createTrip`
		- `POST /createRelation`

## Schemas

- _Supabase implementaions(localhost)_
	- `GET /users`
```json
		[
		  {
		    "id": "52d5d3de-9e54-4847-a56d-540f1a30e4e6",
		    "name": "Souvik Das",
		    "email": "dassou@oregonstate.edu"
		  },
		  {
		    "id": "f1b14023-6fed-4f75-800f-f16231420c4b",
		    "name": "Sahana N H",
		    "email": "sahananh@gmail.com"
		  }
		]``` 