# Create deck

> Success Cases

1. ✅ Receives a **POST** request on route **api/decks/add**
2. ✅ Validates required fields **deckName** and **isPublic**
3. ⛔️ Validates if request was made by an **user**
4. ✅ **Creates** a deck with data provided
5. ✅ Returns **204** on success

> Exceptions

1. ✅ Returns **400** error if deckName or isPublic is not provided by the client
2. ⛔️ Returns **403** error if not an user
3. ✅ Returns **404** error if API does not exist
4. ✅ Returns **500** error if failed to create a deck
