import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  createdBy: DS.attr('string'),
  updatedBy: DS.attr('string'),
  filename: DS.attr('string'),
  fileLocation: DS.attr('string'),
  status: DS.attr('string'),
  createdDateTime: DS.attr('date'),
  updatedDateTime: DS.attr('date')
});
