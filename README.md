
# Terminus Pay Server Backend
Bitcoiner co-working subscriptions powered by BOLT12 (Back-end)

## Tiers
- 1: pleb
- 2: sovereign
- 3: core

## Recurrence
- 1: no recurrence, 1 month payment
- 3: 3 months offer recurrence
- 6: 6 months offer recurrence

## Examples

### Route
- path: /api/v1/terminus/signup
- method: POST
- Body:
```json
{
    "tier": 3,
    "info": {
        "nameNym": "Satoshi",
        "email": "satoshin@gmx.com"
    },
    "recurrence": 3
}
```

### offers
- Checkout out [OFFERS.md](./OFFERS.md) for offer details and examples