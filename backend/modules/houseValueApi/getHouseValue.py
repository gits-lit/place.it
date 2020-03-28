import googlemaps
import json
import sys
from datetime import datetime
import requests 


# inputs:
# Google Maps Api key:  (remember to give it permission to use geocoding api)
# Estated Api Key
# Latitude (Y)
# Longitude (X)

gmapKey = sys.argv[1]
estatedKey = sys.argv[2]
lat = float(sys.argv[3])
long = float(sys.argv[4])

# example
# lat = 34.028885	
# long = -118.354734

gmaps = googlemaps.Client(key=gmapKey)

# Geocoding an address
reverse_geocode_result = gmaps.reverse_geocode((lat, long))
# print(reverse_geocode_result)
# data = json.loads(reverse_geocode_result)
# example output: 642 N Martel Ave, Los Angeles, CA 90036, USA

formatted_add = reverse_geocode_result[1]['formatted_address']

split = formatted_add.split(', ')

streetAddress = split[0]
city = split[1]
stateZip = split[2].split()
state = stateZip[0]
zipCode = stateZip[1]

# need to handle case 

# print(formatted_add)
# streetAddress = '7018 Hawthorn Ave'
# city = 'Los Angeles'
# state = 'CA'
# zipcode = 90028

data = {'token':estatedKey,
        'street_address':streetAddress,
        'city':city,
        'state':state,
        'zip_code':zipCode}


r = requests.get(url = "https://apis.estated.com/v4/property", params = data)
response = r.json()
assessments = response['data']['assessments']
print(assessments[0]['land_value'])
# print(r.json())
