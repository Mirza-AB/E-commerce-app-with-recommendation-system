from flask import Flask, request, jsonify
from flask_cors import CORS
from Recommendation import get_recommendation

app = Flask(__name__)
CORS(app) 

@app.route('/', methods=["GET"])
def welcome():
    return "Flask Running"

@app.route('/recommend', methods=['GET'])
def recommend(): 
    #calling the recommendaiton function by passing the ID and conversing to dictionary 
    recommendation_list = get_recommendation(request.args.get('_id'))
    rep_list = recommendation_list.to_dict('records')
    #converting the objectID of the mongoDB for each document into string
    for doc in rep_list:
        doc['_id'] = str(doc['_id'])
    #returning the Jason formated data
    return jsonify(rep_list)

#server port
if __name__ == '__main__':
    app.run(port=4500, debug=True)