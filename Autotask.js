/*The Challenge: The "Auto-Task Creator"
Scenario: You want to programmatically create a new Incident record and assign it to a specific group.

Goal:

Initialize a new record on the incident table.

Set the Short Description to "Monthly Database Maintenance".

Set the Assignment Group using a SysID (the unique ID for the group).

Insert the record into the database and print the new Incident number. */


var newInc = new GlideRecord('incident');
newInc.initialize();

newInc.short_description = "Monthly Database Maintenance";
newInc.description = "Please perform the scheduled cleanup of the production database.";
newInc.assignment_group = "287ee66b0a0a0b2d0045950a81749291"; // Example SysID

var newSysId = newInc.insert();

gs.info('New Incident created with SysID: ' + newSysId);