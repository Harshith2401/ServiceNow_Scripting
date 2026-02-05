/*The Challenge: The "Latest Asset"
Scenario: You need to find the most recently created Hardware Asset that is currently "In stock." You want to print its Asset Tag.

Goal:

Query the alm_hardware table.

Filter for install_status of 6 (In stock).

Order the results by sys_created_on in descending order.

Limit the result to just one record. */


var assetGR = new GlideRecord('alm_hardware');
assetGR.addQuery('install_status', 6);
assetGR.orderByDesc('sys_created_on');
assetGR.setLimit(1);
assetGR.query();

if (assetGR.next()) {
    gs.info('The newest asset in stock is: ' + assetGR.asset_tag);
}