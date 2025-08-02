# lead_merger.py

def merge_leads(*lead_lists):
    seen = set()
    merged = []

    for leads in lead_lists:
        for lead in leads:
            key = lead.get("email", "").lower()
            if key and key not in seen:
                seen.add(key)
                merged.append(lead)

    return merged
