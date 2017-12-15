using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DatabaseDAO
/// </summary>
public class DatabaseDAO
{
    private TestSiteDBEntities createDatabaseConnection() //Create a new database connection
    {
        return new TestSiteDBEntities();
    }
    public void addContactDetails(string sendName, string emailAddress, string companyName, string subjectField, string messageField) // input fields to input
    {

        ContactSentDetail contact = new ContactSentDetail(); //Set a new instance of a Contact
        contact.senderName = sendName; //Set db value senderName equal to sendName
        contact.emailAddress = emailAddress; //Set db value emailAddress equal to emailAddress
        contact.companyName = companyName; //Set db companyName senderName equal to companyName
        contact.subjectField = subjectField; //Set db subjectField senderName equal to subjectField
        contact.messageField = messageField; //Set db messageField senderName equal to messageField
        contact.dateRecieved = DateTime.Now.Date; //Set db value dateReceived equal to time which the POST was sent

        TestSiteDBEntities db = createDatabaseConnection();
        db.ContactSentDetails1.Add(contact); //Add the details to the contact sent details table
        db.SaveChanges(); //save changes to the database
        //string successfulSave = "Save was successful";
    }
}