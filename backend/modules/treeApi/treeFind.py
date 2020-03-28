import pandas as pd        # reading in data files, data cleaning
import sys
import numpy
import os


lat = float(sys.argv[1])
lng = float(sys.argv[2])
rad = float(sys.argv[3])

def findTrees(inputY, inputX, radius):
    data = pd.read_csv("./data/trees.csv")
    arr = data[['X','Y']].to_numpy()
    arr[:,0] = (inputX-arr[:,0] )**2
    arr[:, 1] = (inputY-arr[:,1])**2
    added = arr[:,0] + arr[:,1]
    added = (added)**(1/2)
    treeCount = added[added <= radius].shape[0]
    return treeCount

print(findTrees(lat, lng, rad))