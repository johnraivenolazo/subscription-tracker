import Schema, { model } from 'moongose'

const subscriptionSchema = new Schema({
    name: {
        type: String,
        required: [true, "Subscription name is required"],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, "Subscription price is required"],
        min: [0, "Subscription price must be greater than 0"],
    },
    currency: {
        type: String,
        required: [true, "Subscription currency is required"],
        enum: ['PHP', 'USD', 'EUR', 'GBP', 'JPY', 'CNY', 'KRW', 'SGD', 'MYR', 'THB'],
        default: 'PHP'
    },
    frequency: {
        type: String,
        enum: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
        default: 'Monthly'
    },
    category: {
        type: String,
        enum: ['Entertainment', 'Health', 'Fitness', 'Education', 'Business', 'Other'],
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Cancelled', Expired],
        default: 'Active'
    },
    startDate: {
        type: Date(),
        required: true,
        validator: function (value) {
            return value <= new Date();
        },
        message: 'Start date must be less than or equal to today'
    },
    renewalDate: {
        type: Date(),
        required: true,
        validator: function (value) {
            return value >= this.startDate;
        },
        message: 'Renewal date must be greater than or equal to start date'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
})

subscriptionSchema.pre('save', function (next) {
    if (!this.renewalDate) {
        const renewalPeriod = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        }

        this.renewalDate = new Date(this.startDate.getTime() + renewalPeriod[this.frequency] * 24 * 60 * 60 * 1000)
        this.renewalDate.setDate(this.startDate.getDate() + renewalPeriod[this.frequency])
    }

    if (this.renewalDate < new Date()) {
        this.status = 'Expired'
    }
    next()
})

const Subscription = model('Subscription', subscriptionSchema)

export default Subscription


