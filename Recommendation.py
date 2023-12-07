#importing necessary python libraries
import pandas as pd  
import pymongo
from bson import ObjectId
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

#getting the data form the mongoDB 
data = pymongo.MongoClient('mongodb://localhost:27017/')

#loading the database and collection respectively
dataDB = data['E-commerce']
dataCollection = dataDB['products']

#find and load the collection into the python notebook as list
product_data = pd.DataFrame(list(dataCollection.find())) 
#dropping all the duplicates of each product by their names
product_data = product_data.drop_duplicates(subset=['product_name']).reset_index(drop=True)

#function for making recommendations
def get_recommendation(p_id):
    #converting the received ID into the unique mongoDB ID
    p_id = ObjectId(p_id)
    #getting the data fron product_data dataframe that matches with the ID that is passed
    product_info = product_data.loc[product_data['_id'] == p_id, ['product_name', 'description', 'retail_price']].iloc[0]
    product_name = product_info['product_name']

    # Using CountVectorizer to extract keywords and remove stop words like and, the, & so on from product description
    transformVector = CountVectorizer(stop_words='english')
    product_matrix = transformVector.fit_transform(product_data['description'])

    # calculating the cosine similarity between product_description vectors
    cos_similar = cosine_similarity(product_matrix , product_matrix)

    # assign and get unique index of the products
    product_index = product_data.set_index('product_name').index  
    title_index = product_index.get_loc(product_name) 
    
    # generate the similarity list
    similar_list = list(enumerate(cos_similar[title_index]))
    #sorting the list based on the second element of each pair
    similar_list.sort(key=lambda x: x[1], reverse=True)
    similar_list = similar_list[1:11]
    #iterate through the similar_list and add into the product_indices array
    product_indices = []
    for i in similar_list:
        product_indices.append(i[0])

    # Return list of recommended product ID name and retail_price respectively
    recommended_products = product_data.loc[product_indices, ['_id', 'product_name', 'product_image', 'retail_price']]
    return recommended_products 

#testing the recommendation system by printing
#suggestion = get_recommendation('654875d0db7df9287cad0b03')
#print(suggestion)