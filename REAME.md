# Terminus Pay Server Backend

## Tiers
- 1: pleb
- 2: sovereign
- 3: core

## Recurrence
- 1: no recurrence, 1 month payment
- 3: 3 months offer recurrence
- 6: 6 months offer recurrence

## Examples

### /api/v1/terminus/signup
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