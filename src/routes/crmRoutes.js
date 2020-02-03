import { 
  addNewContact, 
  getContacts, 
  getContactWithID,
  updateContact,
  deleteContact 
} from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    // Get all contacts
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts) 
      
    // Post a new contact
    .post(addNewContact);

  app.route('/contact/:contactID')
    // Get a specific contact
    .get(getContactWithID)

    // Update a specific contact
    .put(updateContact)

    // Delete a specific contact
    .delete(deleteContact);
}

export default routes;