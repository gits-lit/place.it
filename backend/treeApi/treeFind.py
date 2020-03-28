import pandas as pd
from flask import Flask, request, jsonify
import numpy as np

app = Flask(__name__)

@app.route("/tree", methods=['GET'])
def findTrees():
	# if request.method == 'GET':
	inputX = request.args.get('X') # change if needed 
	inputY = request.args.get('Y') # change if needed 
	radius = request.args.get('rad') # change if needed 
	# inputX = -18
	# inputY = 30
	# radius = 0.003
	data = pd.read_csv("trees.csv")
	arr = data[['X','Y']].to_numpy()
	# xArr = np.full((635558, 1), inputX)
	# yArr = np.full((635558, 1), inputY)
	arr[:,0] = (inputX-arr[:,0])**2
	arr[:, 1] = (inputY-arr[:,1])**2
	added = arr[:,0] + arr[:,1]
	added = (added)**(1/2)
	treeCount = added[added <= radius].shape[0]
	# return treeCount
	return jsonify(treeCount)
	# print(treeCount)
# findTrees()