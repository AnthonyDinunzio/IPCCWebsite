from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId  # To handle MongoDB ObjectIds
from datetime import datetime, timezone

app = Flask(__name__)
CORS(app, supports_credentials=True, resources={r"/submit-form": {"origins": "http://localhost:3000"}})

client = MongoClient('mongodb://localhost:27017/')  # Connect to MongoDB
db = client['IntegrityDB']  # Replace 'your_database' with your database name
email_forms_collection = db['email_forms']  # Collection for email forms
admins_collection = db['admins']  # Collection for admins


@app.route('/get_component/<component_name>', methods=['GET'])
def get_component(component_name):
    # Example: Based on the requested component, return a response to your React app
    if component_name == 'home':
        return jsonify({'component': 'HomeComponent'})
    elif component_name == 'about':
        return jsonify({'component': 'AboutComponent'})
    elif component_name == 'services':
        return jsonify({'component': 'ServicesComponent'})
    else:
        return jsonify({'error': 'Component not found'})


# Endpoint for form submission
@app.route('/submit-form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        form_data = request.json
        
        # Extract data from form_data
        name = form_data.get('name')
        email = form_data.get('email')
        phone = form_data.get('phone')
        message = form_data.get('message')
        companyName = form_data.get('companyName')
        location = form_data.get('location')

        if name and email and phone and message and companyName and location:
            new_form_entry = {
                'name': name,
                'email': email,
                'phone': phone,
                'message': message,
                'companyName': companyName,
                'location': location,
                'time_stamp': datetime.now(timezone.utc)
            }

            # Insert the data into MongoDB
            email_forms_collection.insert_one(new_form_entry)
            
            # Retrieve all records (for testing purposes)
            all_records = list(email_forms_collection.find({}))
            for record in all_records:
                print(record)
                
            # Return success message
            return jsonify({'message': 'Form data received successfully'})
        
        else:
            return jsonify({'error': 'Incomplete form data'})

if __name__ == '__main__':
    records = list(email_forms_collection.find({}))
    for record in records:
        print(record)
    app.run(debug=True)
