import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

##NOTE:.json pushするな
##NOTE: GITHUB secretsに秘密鍵入れてactionsで.json作成する
cred = credentials.Certificate("./test-auto-post-3bbdd-firebase-adminsdk-pxgtc-09c26b9f59.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
docs = db.collection('test').get()
for doc in docs:
    # print(doc.to_dict())
    if 'test_num' in doc.to_dict():
        db.collection('test').document(doc.id).update({'test_num': 0})