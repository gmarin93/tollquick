const Empresa = require('../../models/Empresa');

const getAllListings = async () => {
  const listings = await Empresa.find({}).exec()
  if (!listings) {
    throw new Error('error')
  }
    // .sort({ created: 'desc' })
   // .limit(6);
  return listings;
};

const getSingleListing = async (_id) => {

  const listing = await Empresa.findById({ _id });
  if (!listing) {
    return 'listing does not exist';
  }
  return listing;
};

const addNewListing = async (args) => {
  const listing = await (new Empresa(args)).save();
  return listing;
};

const updateListing = async (args) => {
  const listing = await Empresa.findByIdAndUpdate(
    { _id: args._id },
    args,
    {
      new: true,
      runValidators: true,
    },
    );
    
    return args;
  };
  
  const deleteListing = async (args) => {
    console.log("El id es: "+args._id)
  await Empresa.findByIdAndDelete({ _id: args._id }); // eslint-disable-line no-underscore-dangle
};

module.exports = ({
    name:'empresacontroller',
    getAllListings,
    getSingleListing,
    addNewListing,
    updateListing,
    deleteListing,
  });
  