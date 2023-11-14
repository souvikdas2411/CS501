## CS501 - Fall 2023

Please switch to `test` branch for latest README updates:exclamation::exclamation::exclamation:

This is the CS501 Research Credit Fall 2023 repository.<br>
Advisor - Will Braynen<br>
:snowman: :leaves: :zap:

## Folders
 
<details><summary>:file_folder: sprint1 - Supabase :snowman: implementations(localhost)</summary>

- Supabase :snowman: implementations(localhost) 

	- `GET /users` :busts_in_silhouette: 
		<details><summary>Example value</summary>

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
		]
		```
		</details>

		<details><summary>Schema</summary>

		##### Schema
		> | name | data type | description |
		> |------|-----------|-------------|
		> | id | UUID | User's unique id(auto generated) | 
		> | name | String | User's name |
		> | email| String | User's email |

		</details>
	
	- `GET /trips` :mount_fuji:
		<details><summary>Example value</summary>

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
		</details>

		<details><summary>Schema</summary>

		##### Schema
		> | name | data type | description |
		> |------|-----------|-------------|
		> | id | UUID | User's unique id(auto generated) | 
		> | name | String | Trip name |
		> | destination | String | Trip destination |
		> | start_date | Date(yyyy/mm/dd) | Trip start date |
		> | end_date | Date(yyyy/mm/dd) | Trip end date |

		</details>

	- `GET /user/:id`:bust_in_silhouette:
		<details><summary>Example value</summary>

		```json
		{
		  "id": "f1b14023-6fed-4f75-800f-f16231420c4b",
		  "name": "Sahana N H",
		  "email": "sahananh@gmail.com"
		}
		```
		##### Parameters
		> | name | type | data type | description |
		> |------|------|-----------|-------------|
		> | id | required | ObjectId | User's unique id | 

		</details>

		<details><summary>Schema</summary>

		##### Schema
		> | name | data type | description |
		> |------|-----------|-------------|
		> | id | UUID | User's unique id(auto generated) | 
		> | name | String | User's name |
		> | email| String | User's email |

		</details>

	- `GET /user/:id/travel-buddies` :couple:
		<details><summary>Example value</summary>

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
		##### Parameters
		> | name | type | data type | description |
		> |------|------|-----------|-------------|
		> | id | required | ObjectId | User's unique id | 

		</details>	

		<details><summary>Schema</summary>

		##### Schema
		> | name | data type | description |
		> |------|-----------|-------------|
		> | user_id | UUID | User's unique id(auto generated) | 

		</details>
</details> 

<details><summary>:file_folder: sprint2 - mongoDB :leaves: & dynamoDB :zap: implementations(localhost)</summary>

- mongoDB :leaves: implementations(localhost)

	- `GET /users` :busts_in_silhouette:
		<details><summary>Example value</summary>

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
		</details>

		<details><summary>Schema</summary>

		##### Schema
		> | name | data type | description |
		> |------|-----------|-------------|
		> | id | ObjectId | User's unique id(auto generated) | 
		> | name | String | User's name |
		> | email| String | User's email |
		> | v | Int32 | Auto generated by mongo |

		</details>

	- `GET /trips` :mount_fuji:
		<details><summary>Example value</summary>

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
		</details>

		<details><summary>Schema</summary>

		##### Schema
		> | name | data type | description |
		> |------|-----------|-------------|
		> | id | ObjectId | Trip's unique id(auto generated) | 
		> | name | String | Trip name |
		> | destination| String | Trip destination |
		> | start_date | Date | Trip start date | 
		> |end_date | Date | Trip end date |
		> | v | Int32 | Auto generated by mongo |

		</details>

	- `GET /user/:id` :bust_in_silhouette:
		<details><summary>Example value</summary>

		```json
		{
		    "_id": "654c57ecf6a7c45d94bde724",
		    "name": "Souvik Das",
		    "email": "dassou@oregonstate.edu",
		    "__v": 0
		}
		```
		##### Parameters
		> | name | type | data type | description |
		> |------|------|-----------|-------------|
		> | id | required | ObjectId | User's unique id | 

		</details>

		<details><summary>Schema</summary>

		##### Schema
		> | name | data type | description |
		> |------|-----------|-------------|
		> | id | ObjectId | User's unique id(auto generated) | 
		> | name | String | User's name |
		> | email| String | User's email |
		> | v | Int32 | Auto generated by mongo |

		</details>

	- `GET /user/:id/travel-buddies` :couple:
		<details><summary>Example value</summary>

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
		##### Parameters
		> | name | type | data type | description |
		> |------|------|-----------|-------------|
		> | id | required | ObjectId | User's unique id |

		</details>

		<details><summary>Schema</summary>

		##### Schema
		> | name | data type | description |
		> |------|-----------|-------------|
		> | id | ObjectId | User's unique id(auto generated) | 
		> | name | String | User's name |
		> | email| String | User's email |
		> | v | Int32 | Auto generated by mongo |

		</details>

- dynamoDB :zap: implementations(localhost)

	- `POST /createUser`
		<details><summary>Example body</summary>

		```json
		{
		  "name": "Biswajit Das",
		  "email": "bis@email.com"
		}
		``` 
		##### Parameters
		> | name | type | data type | description |
		> |------|------|-----------|-------------|
		> | id | not required | UUID | User's unique id(auto generated) | 
		> | name | required | String | User's name |
		> | email| required | String | User's email |

		</details>

	- `POST /createTrip`
		<details><summary>Example body</summary>

		```json
		{
			"name": "City of Joy",
			"dest": "Kolkata"
		}
		``` 
		##### Parameters
		> | name | type | data type | description |
		> |------|------|-----------|-------------|
		> | id | not required | UUID | Trip's unique id(auto generated) |
		> | name | required | String | Trip name |
		> | dest | required | String | Trip destination |
		> | start | not required | Date | Trip start date(auto generated atm) |
		> | end | not required | Date | Trip end date(auto generated atm) | 

		</details>

	- `POST /createRelation`
		<details><summary>Example body</summary>

		```json
		{
		  "trip_id": "f056f220-6e99-49f9-82d3-4ebe1d153509",
		  "user_id": "[eeb8d75c-502f-4ef3-be15-1febf4e486d3, 4fe96572-cb5c-43e8-91f4-2c4973b25f2b]"
		}
		``` 
		##### Parameters
		> | name | type | data type | description |
		> |------|------|-----------|-------------|
		> | id | not required | UUID | Relation's unique id(auto generated) |
		> | trip_id | required | UUID | Trip's unique id |
		> | user_id | required | [UUID] | An array of user_id of the users who went on the trip | 

		</details>
</details>

## Notes

:exclamation: All `POST` methods enforce unique id checks.<br>
:exclamation: Pushing directly to the `main` branch is locked.<br><br> 


:email: - dassou@oregonstate.edu

