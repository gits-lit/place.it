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

jsonResponse = { }
jsonResponse['taxes'] = "null"
jsonResponse['land_value'] = "null" 
# Geocoding an address
reverse_geocode_result = gmaps.reverse_geocode((lat, long))
# print(reverse_geocode_result)
# data = json.loads(reverse_geocode_result)
results = reverse_geocode_result[1]
if 'formatted_address' in results:
        formatted_add = reverse_geocode_result[1]['formatted_address']
        # example output: 642 N Martel Ave, Los Angeles, CA 90036, USA
        
        split = formatted_add.split(', ')

        streetAddress = split[0]
        city = split[1]
        stateZip = split[2].split()
        state = stateZip[0]
        zipCode = stateZip[1]

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

        response = response['data']
        if response is None:
                print("No Property Found")
                sys.exit(1)
        if 'taxes' in response:
                amt = response['taxes'][0]['amount']
                jsonResponse['taxes'] = amt
        if 'assessments' in response:
                assessments = response['assessments']
                # print(assessments)
                # full assessments is [{'year': 2019, 'land_value': 240757, 'improvement_value': 82576, 'total_value': 323333}]
                jsonResponse['land_value'] = assessments[0]['land_value']
        else:
                print("Assessments not available for this location")
else:
        print("An address does not exist here")
# example: {'taxes': 4053, 'land_value': 240757}
print(jsonResponse)
        
        