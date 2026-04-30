# User Story: Create PostCard Component

## Overview

TechStore, an e-commerce webshop selling technology products, wants to launch a blog to attract more visitors with content about tech tips, best practices, and product reviews. You must implement a `PostCard` component that displays blog posts using the same shared Button and Grid components as UserCard and ProductCard. This proves that your refactored components are truly reusable across different data types—crucial for TechStore's future growth.

## User Story

**As a** TechStore engineer  
**I want to** create a PostCard component that displays blog posts  
**So that** we can integrate blog content and prove our component library scales to all content types

---

# Gebruikersverhaal: PostCard Component Aanmaken

## Overzicht

TechStore, een online webshop voor technologie producten, wil een blog starten om meer bezoekers aan te trekken met inhoud over tech tips, best practices en product reviews. Jij moet een `PostCard` component implementeren die blog berichten weergeeft met dezelfde gedeelde Button en Grid componenten als UserCard en ProductCard. Dit bewijst dat jouw refactored componenten echt herbruikbaar zijn over verschillende data types—cruciaal voor TechStore's toekomstige groei.

## Gebruikersverhaal

**Als** TechStore engineer  
**Wil ik** een PostCard component aanmaken die blog berichten displayt  
**Zodat** we blog content kunnen integreren en bewijzen dat onze component library schaalbaar is voor alle content types

## Acceptatiecriteria

### ✅ Berichtinformatie Weergeven

De PostCard moet de volgende berichtvelden weergeven:

1. **Titel** (groot, prominent)
    - Locatie: Card header/top
    - Voorbeeld: "Getting Started with React Hooks"

2. **Auteur** (secundaire info)
    - Locatie: Card header, dicht bij titel of eronder
    - Voorbeeld: "by Sarah Chen"

3. **Publicatiedatum** (geformateerd)
    - Locatie: Card header of metagegevens gebied
    - Formaat: Menselijk leesbare datum (bijv. "15 maart 2024")
    - Bron: `publishedAt` veld

4. **Berichtinhoud** (body)
    - Locatie: Card body/hoofdgebied
    - Weergave: De volledige berichtinhoud
    - Voorbeeld: "React Hooks revolutionize how we write functional components..."

5. **Aantal likes** (betrokkenheids metric)
    - Locatie: Card footer of dicht bij likes aantal
    - Formaat: Laat aantal likes zien (bijv. "456 likes")
    - Bron: `likes` veld

6. **Publicatiestatus** (optionele visuele indicator)
    - Locatie: Card header of badge gebied
    - Weergave: "Published" badge alleen als `published === true`
    - Gedrag: Niet-gepubliceerde berichten (published === false) moeten visueel onderscheiden zijn (ander ontwerp, gedempt, waarschuwingsbadge, enz.)

### ✅ Interactiviteit (Like Button)

1. **Like Button**
    - Locatie: Card footer of dicht bij likes aantal
    - Gedrag: Klik om likes aantal te verhogen
    - API Call: `PUT /api/posts/{id}` met nieuw likes aantal
    - Visuele feedback: Button moet bijgewerkt likes aantal weergeven na opslaan
    - Gebruik de gedeelde `Button` component met juiste variant

### ✅ Component Structuur

De PostCard moet:

1. De gedeelde `Button` component gebruiken voor de "Like" actie
2. Berichtdata ophalen van `/api/posts/{postId}` bij mount
3. Laad- en foutstaten afhandelen
4. Het vertaalsysteem gebruiken voor alle gebruikersgerichte tekst

### ✅ Layout Integratie

1. Naadloos werken in `ProductGrid` of soortgelijk roosterlay-out
2. Cards moeten ruwweg gelijke hoogte hebben bij weergave in roosters (zelfs met variërende inhoudslengtes)
3. Respect hebben voor het gedeelde Grid component's responsief gedrag

## Beschikbare Mockgegevens

5 berichten zijn beschikbaar in `src/mock/posts.ts`:

| ID  | Titel                                 | Auteur         | Gepubliceerd | Likes |
| --- | ------------------------------------- | -------------- | ------------ | ----- |
| 1   | Getting Started with React Hooks      | Sarah Chen     | ✓            | 324   |
| 2   | Best Practices for Component Design   | Marco Rivera   | ✓            | 187   |
| 3   | CSS Grid vs Flexbox: When to Use Each | Elena Kowalski | ✓            | 456   |
| 4   | Testing React Components Effectively  | James Wilson   | ✓            | 92    |
| 5   | The Future of Web Development         | Priya Patel    | ✗            | 0     |

## Technische Implementatie Notities

### API Eindpunten

- `GET /api/posts/{postId}` — Enkel bericht ophalen
- `PUT /api/posts/{postId}` — Bericht bijwerken (bijv. likes verhogen)

### Ontwerp Overwegingen

- Volg hetzelfde patroon als UserCard en ProductCard
- Overweeg het gebruik van de gedeelde Card component (eenmaal aangemaakt) voor consistente structuur
- Zorg dat berichten met erg korte of lange inhoud goed weergegeven worden
- Niet-gepubliceerde berichten moeten visueel onderscheiden zijn (waarschuwingskleur, uitgeschakelde status, enz.)

### Bestandsstructuur

Maak deze bestanden aan:

```
src/components/PostCard/
├── PostCard.tsx
└── PostCard.test.tsx (optioneel, maar aanbevolen)
```

### Component Props

```typescript
interface PostCardProps {
	postId: number;
}
```

## Voorgestelde Card Secties

Op basis van de Post gegevensstructuur, organiseer de card als:

```
┌─────────────────────────────────┐
│ Titel (prominent)               │
│ by Auteur | Gepubliceerd Badge  │  ← Header
├─────────────────────────────────┤
│                                 │
│ Berichtinhoud/body tekst...     │  ← Body
│ (kan meerdere regels zijn)      │
│                                 │
├─────────────────────────────────┤
│ 456 likes    [Like Button]      │  ← Footer/Acties
└─────────────────────────────────┘
```

## Validatie

Je PostCard is compleet wanneer:

- ✅ Het geeft alle berichtvelden correct weer
- ✅ De Like button verhoogt het aantal en roept de API aan
- ✅ Laad- en foutstaten worden afgehandeld
- ✅ Het werkt samen met UserCard en ProductCard in dezelfde roosterlay-out
- ✅ Vertalingen werken voor zowel Nederlands als Engels
- ✅ Tests slagen (als je ze schrijft)

## Extra: Hoe Dit Je Refactoring Valideert

Het maken van PostCard bewijst:

1. **Herbruikbaarheid**: Je kunt dezelfde Button component op verschillende entity types toepassen
2. **Flexibiliteit**: Verschillende kaarttypen (User, Product, Post) werken samen
3. **Patroonherkenning**: Je hebt vastgesteld wat gemeenschappelijk is (structuur, ontwerp) versus wat specifiek is (gegevens, bedrijfslogica)

Dit is precies wat de gedeelde Card component zou moeten inschakelen—schrijf eenmaal, gebruik overal.
