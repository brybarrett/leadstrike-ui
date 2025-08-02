# lead_engine.py

from api_hunter import search_emails_by_domain
from lead_cleaner import clean_leads
from signal_filter import filter_leads
from lead_merger import merge_leads

INDUSTRY_DOMAIN_MAP = {
    "construction": ["bechtel.com", "skanska.com"],
    "healthcare": ["mayo.edu", "clevelandclinic.org"],
    "finance": ["blackrock.com", "jpmorganchase.com"],
    "tech": ["stripe.com", "databricks.com"]
}

def get_filtered_leads(industry, location, limit=5):
    domains = INDUSTRY_DOMAIN_MAP.get(industry.lower(), [])
    all_leads = []

    for domain in domains:
        leads = search_emails_by_domain(domain)
        all_leads.append(leads)

    merged = merge_leads(*all_leads)
    cleaned = clean_leads(merged)
    filtered = filter_leads(cleaned)

    return filtered[:limit]
