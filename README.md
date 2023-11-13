## CS501 - Fall 2023

This is the CS501 Research Credit Fall 2023 repository lead by Prof. Will Braynen. 

## Folders

- **sprint1** 
	- Supabase implementaions(localhost) 
		- `GET /users`
		- `GET /trips`
		- `GET /user/:id`
		- `GET user/:id/travel-buddies`

- **sprint2** 
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

## Schemas

- Supabase implementaions(localhost)

	- `GET /users`
	<details>
		<summary></summary>>
		
			```json
				[
				  {
				    "id": "52d5d3de-9e54-4847-a56d-540f1a30e4e6",
				    "name": "Souvik Das",
				    "email": "dassou@oregonstate.edu"
				  }
				]
			```

		
	</details>
	
	- `GET /trips`
	```json
	[
	  {
	    "id": "2100e8ef-07a4-4935-9c65-d8ddc4d25aa2",
	    "name": "City of Joy",
	    "destination": "Kolkata",
	    "start date": "2023-10-25",
	    "end date": "2023-10-31"
	  }
	]
	```
	- `GET /user/:id`
	```json
	{
	  "id": "f1b14023-6fed-4f75-800f-f16231420c4b",
	  "name": "Sahana N H",
	  "email": "sahananh@gmail.com"
	}
	```
	- `GET user/:id/travel-buddies`
	```json
	[
	  {
	    "user_id": "52d5d3de-9e54-4847-a56d-540f1a30e4e6"
	  },
	  {
	    "user_id": "f1b14023-6fed-4f75-800f-f16231420c4b"
	  }
	]
	```

- mongoDB implementaions(localhost)

	- `GET /users`
	```json
	[
	    {
	        "_id": "654c57ecf6a7c45d94bde724",
	        "name": "Souvik Das",
	        "email": "dassou@oregonstate.edu",
	        "__v": 0
	    }
	]
	```
	- `GET /trips`
	```json
	[
	    {
	        "_id": "654c599013abf7ec721ded18",
	        "name": "COJ2",
	        "destination": "Kolkata",
	        "start_date": "2000-01-01T08:00:00.000Z",
	        "end_date": "2000-01-01T08:00:00.000Z",
	        "__v": 0
	    },
	    {
	        "_id": "6551c42c9618b7ba0ad0457b",
	        "name": "COJ3",
	        "destination": "Kolkata",
	        "start_date": "2023-11-13T06:37:32.059Z",
	        "end_date": "2023-12-13T06:37:32.059Z",
	        "__v": 0
	    }
	]
	```
	- `GET /user/:id`
	```json
	{
	    "_id": "654c57ecf6a7c45d94bde724",
	    "name": "Souvik Das",
	    "email": "dassou@oregonstate.edu",
	    "__v": 0
	}
	```
	- `GET user/:id/travel-buddies`
	```json
	[
	    {
	        "_id": "654c5f689096ee8a9cd068b7",
	        "trip_id": {
	            "_id": "6551c42c9618b7ba0ad0457b",
	            "name": "COJ3",
	            "destination": "Kolkata",
	            "start_date": "2023-11-13T06:37:32.059Z",
	            "end_date": "2023-12-13T06:37:32.059Z",
	            "__v": 0
	        },
	        "user_id": [
	            {
	                "_id": "654c57ecf6a7c45d94bde724",
	                "name": "Souvik Das",
	                "email": "dassou@oregonstate.edu",
	                "__v": 0
	            },
	            {
	                "_id": "654c58029e6615488e031906",
	                "name": "Sahana NH",
	                "email": "sahana@oregonstate.edu",
	                "__v": 0
	            }
	        ]
	    }
	]
	``` 