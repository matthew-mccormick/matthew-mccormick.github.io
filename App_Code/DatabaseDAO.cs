using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DatabaseDAO
/// </summary>
public class DatabaseDAO
{
    private TestSiteDBEntities createDatabaseConnection()
    {
        return new TestSiteDBEntities();
    }
    public void addContactDetails(string sendName, string emailAddress, string companyName, string subjectField, string messageField)
    {

        ContactSentDetail contact = new ContactSentDetail();
        contact.senderName = sendName;
        contact.emailAddress = emailAddress;
        contact.companyName = companyName;
        contact.subjectField = subjectField;
        contact.messageField = messageField;
        contact.dateRecieved = DateTime.Now.Date;

        TestSiteDBEntities db = createDatabaseConnection();
        db.ContactSentDetails1.Add(contact);
        db.SaveChanges();
        //string successfulSave = "Save was successful";
    }
}