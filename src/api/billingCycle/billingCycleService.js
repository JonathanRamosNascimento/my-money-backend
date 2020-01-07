const BillingCycle = require('./billingCycle');

BillingCycle.mehods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});

module.exports = BillingCycle;