import pandas as pd        # reading in data files, data cleaning
import sys
import numpy
import os


lat = float(sys.argv[1])
lng = float(sys.argv[2])
length = float(sys.argv[3])
width = float(sys.argv[4])

data = pd.read_csv("./data/trees.csv")
data = data[['X','Y']]
# arr = data[['X','Y']].to_numpy()
# arr[:,0] = (inputX-arr[:,0] )**2
# arr[:, 1] = (inputY-arr[:,1])**2
# added = arr[:,0] + arr[:,1]
# dist = (added)**(1/2)
# treeCount = dist[dist <= length].shape[0]

# convert feet to degrees
lengthDeg = length/364000
widthDeg = width/288200 

treeCount = data[(data['Y'] <= lat+lengthDeg)
    & (data['Y'] >= lat-lengthDeg) 
    & (data['X'] >= lng-widthDeg) & (data['X'] <= lng+widthDeg)].shape[0]
print(treeCount)

