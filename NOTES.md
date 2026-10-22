# NOTES while coding :)

- imported `Schema` & `Document` in the top of model files and the below is used to create the model - (left side is used to retrieve the existing model from the database and the right side is used to create new model)
```
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)
```