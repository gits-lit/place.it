import pandas as pd        # reading in data files, data cleaning


@app.route("/tree", methods=['GET'])
def findTrees(inputX, inputY, radius):
    if request.method == 'GET': 
        inputX = request.inputX # change if needed 
        inputY = request.inputY # change if needed 
        radius = request.radius # change if needed 
        data = pd.read_csv("trees.csv")
        arr = data[['X','Y']].to_numpy()
        arr[:,0] = (inputX-arr[:,0] )**2
        arr[:, 1] = (inputY-arr[:,1])**2
        added = arr[:,0] + arr[:,1]
        added = (added)**(1/2)
        treeCount = added[added <= radius].shape[0]
        return treeCount


