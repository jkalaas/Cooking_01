/**
 * recipe-data.js
 * Built-in seafood recipe catalogue. Additional recipes are merged in from
 * localStorage at runtime (see recipe-grid.js).
 */

export const recipes = [
  {
    id: 'lobster-thermidor',
    title: 'Lobster Thermidor',
    subtitle: 'Classic French Elegance',
    description:
      'Split roasted lobster bathed in a cognac and tarragon cream, finished under the grill with aged Gruyère — the crown jewel of the French kitchen.',
    time: '45 min',
    difficulty: 'Advanced',
    serves: 2,
    category: 'Shellfish',
    image:
      'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=85',
    detailImage:
      'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      '1 whole live lobster (750 g / 1.5 lb)',
      '3 tbsp unsalted butter',
      '1 shallot, finely minced',
      '3 tbsp cognac',
      '100 ml dry white wine',
      '200 ml double cream',
      '1 tbsp Dijon mustard',
      '2 egg yolks',
      '30 g Gruyère, finely grated',
      'Fresh tarragon and chervil',
      'Fleur de sel and white pepper',
    ],
    steps: [
      'Preheat the oven to 220 °C (425 °F). Split the lobster in half lengthwise with a sharp chef's knife; season the flesh with fleur de sel.',
      'Roast cut-side down on a hot baking tray for 8 minutes until just cooked. Let rest, then remove tail and claw meat, dice into 2 cm pieces, and reserve the shells.',
      'Melt butter in a heavy saucepan over medium heat. Sweat the shallot until translucent, 3 minutes. Add cognac and flambé carefully, shaking the pan until flames subside.',
      'Pour in the white wine and reduce by half. Add double cream and simmer until the sauce coats the back of a spoon, about 5 minutes.',
      'Off the heat, whisk in the mustard, then the egg yolks one at a time. Fold in the lobster. Season generously with white pepper.',
      'Spoon filling back into the shells, mounding it generously. Scatter Gruyère over the top.',
      'Broil on high for 2–3 minutes until deeply golden and bubbling. Garnish with tarragon and chervil; serve immediately.',
    ],
    chefNote:
      'Undercook the lobster slightly in the oven — it finishes under the grill. The cream sauce must be thick before you fold in the yolks, or the filling will be watery.',
  },
  {
    id: 'seared-scallops',
    title: 'Seared Diver Scallops',
    subtitle: 'Cauliflower Purée & Black Truffle',
    description:
      'Caramelised diver scallops with a milk-white cauliflower purée and the earthy whisper of black truffle — deceptively simple, breathtakingly precise.',
    time: '30 min',
    difficulty: 'Intermediate',
    serves: 4,
    category: 'Shellfish',
    image:
      'https://images.unsplash.com/photo-1611599538835-b52a8c2f9080?auto=format&fit=crop&w=800&q=85',
    detailImage:
      'https://images.unsplash.com/photo-1611599538835-b52a8c2f9080?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      '8 large diver scallops, roe attached',
      '200 g cauliflower florets',
      '120 ml double cream',
      '60 g cold unsalted butter, cubed',
      '2 tbsp grapeseed oil',
      '1 tsp white truffle oil',
      'Micro herbs or pea shoots, to finish',
      'Sea salt and white pepper',
    ],
    steps: [
      'Boil cauliflower in generously salted water until very tender, about 12 minutes. Drain and shake dry in the colander.',
      'Blend cauliflower with cream until completely smooth. Pass through a fine sieve. Return to a clean pan and whisk in cold butter piece by piece until silky and glossy. Season with salt and white pepper; keep warm.',
      'Pat scallops bone-dry with kitchen paper — moisture is the enemy of a crust. Season the flat side generously with sea salt only.',
      'Heat a cast-iron pan over high heat until wisps of smoke appear. Add grapeseed oil. Lay scallops seasoned-side down without crowding; do not touch for 90 seconds.',
      'Flip each scallop; cook 60 seconds more. The interior should still be translucent and just warm at the centre.',
      'Spoon a swoosh of warm purée onto each warmed plate. Set two scallops on top. Finish with a few drops of truffle oil and a small cluster of micro herbs.',
    ],
    chefNote:
      'The pan must be smoking hot before the scallops go in. Move them even slightly and they will steam rather than sear. One flip, one minute — resist every temptation to prod.',
  },
  {
    id: 'oysters-rockefeller',
    title: 'Oysters Rockefeller',
    subtitle: 'Creamed Spinach & Pernod',
    description:
      'Plump oysters on the half-shell crowned with a silken spinach, Pernod and Parmesan gratin — an iconic New Orleans classic reimagined for the modern table.',
    time: '25 min',
    difficulty: 'Easy',
    serves: 4,
    category: 'Oysters',
    image:
      'https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=800&q=85',
    detailImage:
      'https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      '12 fresh oysters, shucked on the half-shell',
      '200 g fresh spinach, blanched and squeezed dry',
      '3 tbsp unsalted butter',
      '1 shallot, finely minced',
      '1 garlic clove, minced',
      '2 tbsp Pernod',
      '30 g Parmesan, finely grated',
      '30 g panko breadcrumbs',
      '1 tbsp double cream',
      'Coarse rock salt, for the tray',
      'Lemon wedges, to serve',
    ],
    steps: [
      'Preheat the broiler to its highest setting. Spread a thick layer of rock salt over a heavy baking tray and nestle the oysters in the salt to keep them level and upright.',
      'Melt butter in a sauté pan over medium heat. Sweat shallot and garlic until completely soft, 3 minutes. Add the dry spinach and stir until any remaining moisture evaporates.',
      'Add Pernod; cook for 1 minute until the alcohol burns off. Add cream; stir to combine. Transfer to a blender and pulse to a coarse, bright-green paste. Season well.',
      'Spoon a generous teaspoon of spinach paste onto each oyster, covering the flesh entirely.',
      'Combine Parmesan and breadcrumbs; scatter evenly over each oyster.',
      'Broil 3–4 minutes until the topping is deep gold and the oyster edges have just begun to curl. Serve immediately with lemon wedges.',
    ],
    chefNote:
      'Squeeze the blanched spinach until it feels almost dry to the touch — a wet filling will dilute the oyster liquor and ruin the texture. The filling can be made a day ahead.',
  },
  {
    id: 'sea-urchin-linguine',
    title: 'Sea Urchin Linguine',
    subtitle: 'Uni, Lemon & Chives',
    description:
      'The ocean distilled into a bowl. Fresh uni dissolves into a silken butter emulsion that clings to linguine strands — raw, oceanic, and completely unforgettable.',
    time: '25 min',
    difficulty: 'Intermediate',
    serves: 2,
    category: 'Pasta & Fish',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=85',
    detailImage:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      '200 g fresh linguine (or spaghetti)',
      '80 g fresh sea urchin roe (uni), divided',
      '2 tbsp salted cultured butter',
      '1 shallot, finely minced',
      '60 ml dry white wine',
      'Zest and juice of ½ lemon',
      '1 tbsp fresh chives, finely snipped',
      'White pepper, to finish',
    ],
    steps: [
      'Bring a large pot of water to a rolling boil; season it until it tastes of the sea. Cook linguine until al dente; reserve 120 ml of the cooking water before draining.',
      'Meanwhile, melt butter in a wide, low-sided pan over low heat. Add shallot and cook gently for 2 minutes — it should not colour.',
      'Pour in white wine; reduce by half. Add a generous splash of pasta water and swirl the pan to create a light emulsion.',
      'Remove the pan from the heat. Add two-thirds of the uni and stir gently until it melts into the sauce — do not return to the heat, or the uni will scramble.',
      'Add the drained linguine and toss vigorously, adding pasta water a tablespoon at a time until the sauce coats every strand glossily.',
      'Squeeze in lemon juice; add zest. Divide between two warm shallow bowls. Crown each portion with the remaining uni, a scatter of chives, and a turn of white pepper. Eat immediately.',
    ],
    chefNote:
      'The residual heat of the pan and the hot pasta is all the cooking the uni needs. Any direct flame and the roe turns grainy and bitter. Warm bowls are non-negotiable.',
  },
  {
    id: 'bouillabaisse',
    title: 'Bouillabaisse Marseillaise',
    subtitle: 'Rouille & Toasted Baguette',
    description:
      'The legendary saffron-gilded broth of the Provençal coast, built over hours with fennel, tomato and the finest mixed catch — served with fiery rouille and baguette.',
    time: '1 hr 30 min',
    difficulty: 'Advanced',
    serves: 6,
    category: 'Stew & Broth',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85',
    detailImage:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      '500 g firm-fleshed fish (monkfish, John Dory, sea bass), cut in chunks',
      '400 g mixed shellfish (mussels, clams, langoustines)',
      '250 g waxy potatoes, diced',
      '1 fennel bulb, thinly sliced',
      '3 ripe tomatoes, roughly chopped',
      '1 white onion, sliced',
      '4 garlic cloves, smashed',
      'Large pinch saffron threads, steeped in 2 tbsp warm water',
      '200 ml dry white wine',
      '1.2 L good fish stock',
      '3 tbsp extra-virgin olive oil',
      'Strip of orange zest, fresh thyme, bay leaf',
      'Rouille and sliced baguette, to serve',
    ],
    steps: [
      'Heat olive oil in a wide, heavy-bottomed pot over medium heat. Add onion, fennel, and garlic; cook, stirring occasionally, until very soft and fragrant, 12 minutes.',
      'Add tomatoes, saffron water, orange zest, thyme, and bay. Cook, crushing the tomatoes occasionally, until the mixture is thick and jammy, 8 minutes.',
      'Pour in the white wine; increase heat and reduce by half. Add fish stock and potatoes; bring to a vigorous boil. Cook uncovered for 12 minutes.',
      'Reduce heat to a brisk simmer. Add the firm fish chunks; cook 4 minutes. Add mussels, clams, and langoustines; cover the pot tightly.',
      'Steam for 4–5 minutes until all shells are open and the langoustines are cooked through. Discard any shellfish that remain firmly closed.',
      'Ladle the broth generously into wide, warm bowls; arrange fish and shellfish on top. Spread rouille thickly onto toasted baguette slices and float them over the soup.',
    ],
    chefNote:
      'The quality of your fish stock is everything. A weak stock produces a thin, unconvincing broth. Make your own, or use the best you can source. The saffron must be steeped — never added dry.',
  },
  {
    id: 'turbot-beurre-blanc',
    title: 'Wild Turbot',
    subtitle: 'Champagne Beurre Blanc & Osciètre Caviar',
    description:
      'The undisputed king of the sea, pan-roasted to a crisp golden skin, resting on a champagne beurre blanc and finished with a quenelle of Osciètre caviar.',
    time: '40 min',
    difficulty: 'Advanced',
    serves: 4,
    category: 'Flatfish',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=85',
    detailImage:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      '4 turbot fillets (180 g each), skin on',
      '200 ml champagne (or dry sparkling wine)',
      '100 ml fish stock',
      '1 shallot, finely sliced',
      '180 g cold unsalted butter, cubed',
      '30 g Osciètre caviar',
      '2 tbsp clarified butter',
      'Fresh dill fronds and sea purslane',
      'Fleur de sel and white pepper',
    ],
    steps: [
      'Make the beurre blanc: combine champagne, fish stock, and shallot in a small saucepan. Reduce over medium-high heat to 3 tablespoons of liquid. Strain through a fine sieve; return liquid to a clean pan.',
      'Set the pan over the lowest possible heat. Whisk cold butter cubes into the reduction one piece at a time, waiting for each to nearly disappear before adding the next. The sauce must stay creamy, never oily. Season with fleur de sel and white pepper; keep warm in a bain-marie.',
      'Score the turbot skin three times with a sharp knife to prevent curling. Season the flesh side with fleur de sel.',
      'Heat clarified butter in a large non-stick pan over medium-high heat until shimmering. Lay turbot skin-side down; press each fillet gently with a fish spatula for 10 seconds to ensure full contact. Cook without touching for 4–5 minutes.',
      'Flip the fillets carefully; immediately remove the pan from the heat. Allow residual heat to finish the flesh for 60–90 seconds. The fish should be opaque throughout with a coral-pink centre.',
      'Pool the beurre blanc on each warmed plate. Rest turbot skin-side up on the sauce. Place a small quenelle of caviar alongside; finish with dill and sea purslane.',
    ],
    chefNote:
      'Beurre blanc breaks if it boils. If the sauce separates, remove from heat immediately and whisk in an ice cube. Clarified butter in the pan, not whole butter — it handles high heat without burning.',
  },
];
