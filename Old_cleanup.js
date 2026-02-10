/*The Challenge: The "Old Log Cleanup"
Scenario: You have a specific test incident with the Number "INC0009009" that was created by mistake, and you need to permanently remove it from the system.

Goal:

Query the incident table.

Find the record where the number is "INC0009009".

Delete that specific record. */

var deleteGR = new GlideRecord('incident');
deleteGR.addQuery('number', 'INC0009009');
deleteGR.query();

if (deleteGR.next()) {
    deleteGR.deleteRecord();
    gs.info('Incident INC0009009 has been deleted.');
} else {
    gs.info('No record found to delete.');
}