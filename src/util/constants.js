const COUNTRIES = {
    UNITED_STATES: {
            Alabama: false,
            Alaska: false,
            Arizona: false,
            Arkansas: false,
            California: false,
            Colorado: false,
            Connecticut: false,
            Delaware: false,
            Florida: false,
            Georgia: false,
            Hawaii: false,
            
            Idaho: false,
            Illinois: false,
            Indiana: false,
            Iowa: false,
            Kansas: false,
            Kentucky: false,
            Louisiana: false,
            Maine: false,
            Maryland: false,
            Massachusetts: false,
            Michigan: false,
            Minnesota: false,
            Mississippi: false,
            Missouri: false,
            Montana: false,
            Nebraska: false,
            Nevada: false,
            "New Hampshire": false,
            "New Jersey": false,
            "New Mexico": false,
            "New York": false,
            "North Carolina": false,
            "North Dakota": false,
            Ohio: false,
            Oklahoma: false,
            Oregon: false,
            Pennsylvania: false,
            "Rhode Island": false,
            "South Carolina": false,
            "South Dakota": false,
            Tennessee: false,
            Texas: false,
            Utah: false,
            Vermont: false,
            Virginia: false,
            Washington: false,
            "West Virginia": false,
            Wisconsin: false,
            Wyoming: false,
    },

};

const productItemsOptions = [
    { value: 'beef', label: 'Beef' },
    { value: 'chicken', label: 'Chicken' },
    { value: 'pork', label: 'Pork' },
    // { value: 'dairy', label: 'Dairy' },
    // { value: 'eggs', label: 'Eggs' },
    { value: 'goat', label: 'Goat' },
    { value: 'lamb', label: 'Lamb' },
    // { value: 'seafood', label: 'Seafood' },
    // { value: 'fruits', label: 'Fruits' },
    // { value: 'vegetables', label: 'Vegetables' },
    { value: 'maple', label: 'Maple' },
    { value: 'honey', label: 'Honey' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'rabbit', label: 'Rabbit' },
    { value: 'bison', label: 'Bison' },
    { value: 'duck', label: 'Duck' },
    { value: 'elk', label: 'Elk' },
    { value: 'goose', label: 'Goose' },
]

const FAQuestions = [
    {
        question: 'Can FarmsThatShip users make a purchase using the website / app?',
        answer: 'Yes, users can order using www.farmsthatship.com'
    },
    {
        question: 'Does FarmsThatShip charge a fee to users when ordering from my farm / ranch?',
        answer: 'FarmsThatShip has a 3% service fee for payment processing at checkout'
    },
    {
        question: 'Can we configure different shipping rates for different states?',
        answer: 'Yes, you can set a different shipping rate for each state'
    },
    {
        question: 'How do i receive and manage orders from FarmsThatShip?',
        answer: 'We will send you an email notification with the order. Also you can manage orders on your order management tab on your profile page once logged in.'
    },
    {
        question: 'Is there a signup fee?',
        answer: 'No. Free to sign up'
    },
    {
        question: 'Does FarmsThatShip take a commission percentage from orders made using the FarmsThatShip app?',
        answer: 'Yes, we charge 12% commission.'
    },
    {
        question: 'Can I (farmer / rancher) pause accepting orders?',
        answer: 'Absolutely there is an Enable/Disable Orders button in Configuration tabs that pauses orders.'
    },
    {
        question: 'Can I (farmer / rancher) sell by weight?',
        answer: 'Not at the moment. Currently you cant charge hard to portion items by actual weights instead have to set close to standard quantities.'
    },
    {
        question: 'Can I (farmer / rancher) sell by unit?',
        answer: 'All items can be set up to be sold by the unit just like traditional eCommerce.'
    },
    {
        question: 'Can I (farmer / rancher) sync my products inventory with Shopify?',
        answer: 'Coming very soon.'
    },
]

const commissionAgreementText = "Farm agrees to a commission rate of 5% ​​from gross sales made through the FarmsThatShip web & mobile applications. Funds will be deposited into farm's connected Stripe account every 3-7 days."

export {
    COUNTRIES,
    productItemsOptions,
    FAQuestions,
    commissionAgreementText
}