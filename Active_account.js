/*Let's look at GlideAggregate. This is the specialized tool for doing math (like counting, averaging, or summing) across a large number of records. It’s much faster than a standard GlideRecord when you only need a total number.

The Challenge: The "Active Count"
Scenario: You need to find out exactly how many Active records exist in the incident table and print that number.

Goal:

Use GlideAggregate on the incident table.

Filter for active is true.

Add a "COUNT" aggregate.

Print the result. */

var countGA = new GlideAggregate('incident');
countGA.addQuery('active', true);
countGA.addAggregate('COUNT');
countGA.query();

if (countGA.next()) {
    var total = countGA.getAggregate('COUNT');
    gs.info('Total active incidents: ' + total);
}