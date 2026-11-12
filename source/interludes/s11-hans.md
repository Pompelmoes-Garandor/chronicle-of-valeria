# Thaw

**Player:** Hans (Sam plays him)
**When (for Sam, not shown to players):** the same held breath in the cave as "The Eleven Paces", "Four Notes" and "Two Tongues". Hans stands by the tunnel with the black box warm in his chest. A flake of black ash lands on the seam of his chest plate, right over the box. The box goes cold. His sound stones start playing a tune he doesn't have on file: an old Valerian waltz. Behind it are three hundred years he had put away.
**What it sets up:** the choice Hans makes at the end (W3) is saved and sent to Sam, like the other interludes.
**Reading time:** about 25 minutes along one path, plus the fight.
**Echo:** one, set by the last choice. One use; expiry as Sam rules for all Echoes.
**Same rules as the other interludes:** Matthew never appears in a future. No god speaks in words. None of the afternoon's words appear (the list is in the DM notes). Every future here is a *maybe*.
**Canon used (from the table or Sam):** Hans is a Valerian construct, the most advanced of his kind, over three hundred years old. He was frozen in Valeria and thawed out. He worked at the inn in the ruins as Gerda's butler and muscle. The crew bought his freedom (1,200 gp to Gerda; Saphira gave him 300 gp of his own). The blue headphones are his sound stones. The black box from the ship is inside his chest.
**New lore in here, all marked [SAM?]:** the house as it was when it was new, the woman who built his face, the guests who stayed one night and walked north in the morning, the last guest, the night the cold came, and Gerda's hands in the thaw. These are Claude's fills on top of the table's canon. Sam keeps, changes or cuts them before the interlude is switched on (H11_ON).

**For the build (the parser skips everything above the first rule):**

*Look.* {past}: the house when it was new, warm gold light, steam, polished stone, a glass roof. Seen in Hans's own memory, a little too sharp, like a record played back. {future}: cold blue-white, frost on everything, glitching text. Untagged: the present, the cave, lamp and ash. {again}: the loop, the waltz played backwards.

*Figures.* Two, each with a voice style:
- **The last guest** (a very tall guest in a travelling cloak, warm as a stove, from three hundred years ago): never speaks after S1. Seen at the edges of the past visions, always walking north.
- **The last Hans** (Hans, three hundred years on; frost on his face plate, sound stones silent, one hand frozen in a lamp-holding grip): lines written `@future: "..."`. Low, flat, a voice that has said "Welcome" to an empty room too many times. Sometimes two voices at once. Never seen from the front before W2.

*Whispers.* `~text~` is the last Hans's voice bleeding into the passage.

*Ash.* `^^text^^` is text the black ash is eating.

*Conditions.* A paragraph starting `?flicker>=3:`, `?dread>=3:` or `?seen P2c:` shows only when that holds.

*Degrees.* Instead of paces: Hans's own warmth. Eleven degrees above freezing, shown as a strip. H1 is the first drop. Each of the seven visions (three past, S1, three futures) takes one. L1 runs them backwards. W1 is the last degree. W2 is at freezing. The endings say whether he stays warm.

*Meters.* `+dread` (0-5): how much frost has got into him; more whispers, more ash, a third Frozen Guest in the fight. `+flicker` / `-flicker` (0-5, start at 2): how faint the last Hans is. High, he stutters and goes see-through. Low, he's solid.

*Sound.* Cue list:
- `waltz`: an old slow waltz on a music box and strings, slightly out of tune, warm.
- `waltz-back`: the same waltz backwards.
- `frost`: ice creeping over glass, close, tiny cracks.
- `hearth`: a big fire in a stone hall, a crowd talking, glasses.
- `steam`: steam pipes knocking and hissing in walls.
- `door-heavy`: a very heavy door shutting far away.
- `wind-north`: a cold wind, high, empty.
- `chip`: a small chisel on ice, slow.
- `beat`: Hans's techno beat, muffled, as if through ice.
- `heartbeat-two`, `heartbeat-one`, `silence`, `rewind`, `drip`: as in "The Eleven Paces".

*Hubs.* E0 offers three past visions and F0 three futures, any order, greyed once done; when all three are done, E0 goes on to S1 and F0 goes on to W1. Each vision ends with "Back".

*Fight @frost.* Win goes to W3, loss goes to W3x. Stat blocks below.

*Paintings.* (1) the great house new, a glass roof, steam, warm light, a woman engineer setting a construct's face; (2) a long dining hall, guests in grey travel cloaks, a construct pouring wine, one young guest asking it to dance; (3) the house half empty, dust sheets on chairs, a construct lighting lamps for nobody; (4) a very tall cloaked guest at the door at night, snow starting, a construct holding a lamp; (5) a construct frozen in ice at a door, holding a lamp, frost over everything; (6) a small inn of its own years on, room doors with names, nobody there; (7) a wake in a tavern, old people and one construct with headphones; (8) a door of fire in a dark place, a construct stepping toward it; (9) the last Hans, frost on his face plate, standing alone by a door in the ash.

**Fight: The Frost.** Hans alone (AC 17, HP 60). The cave floor has gone white with frost; the lamp burns blue. The last Hans stands between Hans and the tunnel. He doesn't want to destroy Hans. He wants to freeze him again, so he sleeps through what's coming and doesn't have to watch it.
- *The last Hans.* Medium construct. AC 16, HP 45, speed 30. Immune to cold, poison, psychic, charmed and frightened. Initiative +0. One Rime Slam a turn (two when the flicker is 1 or less). *Rime Slam:* +6 to hit, 2d6+2 cold.
- *Frozen Guest* (two; three at dread 3+). Medium undead, a guest from the old house in a skin of ice. AC 11, HP 11, speed 30. *Cold Hands:* +4 to hit, 1d6+1 cold.
- *The box:* the black box in Hans's chest keeps him warm (4). At the end of each round it loses a degree for every Frozen Guest standing next to Hans. At 0 he freezes and the fight is lost. *Turn it up* (bonus action): he plays his beat through the stones and the box warms a degree (once a round).
- Hans's own tools all apply: two Slams a turn, Bodyguard, The Drop.
- The last Hans at 0 HP: win, go to W3. Hans at 0 HP or the box at 0: no game over; he goes still under the frost for a moment, go to W3x. Both lead to the same last choice. Tested in the fight simulator: a careful player (keeps the box turned up, clears the guests next to him first) wins about 18 in 20.

---

## H1. A flake

You are standing guard at the mouth of the tunnel. You picked the spot yourself. Nobody gets into the cave without going past you.

You don't breathe, so the ash doesn't bother you. It has been falling all day. You have counted four thousand and eleven flakes on your left sleeve. You didn't count the right sleeve, because it would have been the same.

Behind you the crew are resting. Katy is sitting with her father. Stig is on his stone with his towel. Saphira has her back to the wall. Thorn is by the fire. Every few minutes you look round to see if anyone needs anything. That was your job for a long time, and you still do it. Nobody has needed anything for an hour.

The black box from the wrecked ship sits in your chest, behind the metal plate. It has been warm ever since you took it out of the wreck.

One flake comes down past your face. It lands on the seam of your chest plate, right over the box.

{sound: frost}

The box goes cold, all at once. You feel a draught go through your chest. You have never felt a draught in there before.

Then the blue stones over your ears start to play music on their own. They only ever play when you choose, and they play your beat. This is something else: an old, slow waltz on a music box and strings, slightly out of tune.

{sound: waltz}

You keep everything you have ever seen or heard on file, the way a clerk keeps papers. You search the file for this tune. It isn't there.

You check your inside temperature. It has dropped by one degree.

→ Continue (go to H2)

## H2. Held

The ash stops falling.

The flakes hang in the air in the lamplight. Katy's hand has stopped halfway to her father's. Stig has stopped halfway out of his seat. Saphira's hood has stopped in the middle of moving. Everyone is frozen except you.

There is frost on your fingers, a fine white layer of it in the joints. You think: the last time I had frost on my fingers was...

The thought stops there. Your memory has a gap where the rest of it should be, and the gap feels cold.

~Welcome.~

That was your voice. But you didn't say anything.

→ Continue (go to H3)

## H3. Cold

You look down at your hands. The frost is slowly spreading up the backs of them.

Your face plate creaks. You know that sound. You heard it for a long time once, but you can't remember when.

The waltz keeps playing. Under it, very far off, you can hear a big fire crackling in a stone room, and people talking.

{sound: hearth}

The cave starts to fade. Behind it there is a warm gold light, with steam in it.

~Room kept.~

Memories you locked away a long time ago are coming back, one at a time.

→ Let them come. (go to E0)

## E0. What the house remembers

You are standing in a doorway. You know it at once: oak and brass, and a floor that is warm under your feet. It's the front door of the house where you were made. You stood here for years.

Behind you is the cave. In front of you is a long corridor of doors. Each door opens on a room in that house, a room you once stood in.

You were built to stand in one place and be useful, so you never moved much. You can still feel the floor of every one of those rooms under your feet.

Three of the doors are close enough to walk into.

→ A glass roof, and a woman with a screwdriver. (go to P1a)
→ A long table, and guests in grey. (go to P2a)
→ Dust sheets. (go to P3a)

*Hub: then go to S1*

## P1a. A face {past}

{sound: steam}

A workshop with a glass roof. The glass is new and so clean you can hardly see it, and the sky through it is very blue. Steam pipes run along every wall and knock now and then.

You are sitting on a stool. You can't move yet. Only your eyes work. You aren't finished.

A woman sits in front of you with a tray of small tools. She has grey in her hair, soot on one cheek and a pencil behind her ear. She is painting your face.

She works slowly. A little paint here, then she leans back and looks, then a little there.

"No," she says, looking at your mouth. "That smile's too pleased with itself."

She fixes it.

"There. Now you look like someone who'll still be up when the guests get in late."

You can't answer her. You don't have a voice yet. It's the first time you remember wanting one.

[SAM?: the house when it was new, and the woman who made Hans's face]

→ Let her finish the face. (go to P1b) -flicker
→ Look at what's on the bench beside her. (go to P1c) +dread

## P1b. Finished {past}

You let her work.

It takes all afternoon. The sun moves across the glass roof. She hums while she paints. She is humming the waltz, and she's out of tune in the same places as the music in your head.

When she's done, she sits back and looks at you for a long time.

"Right," she says. "One last thing."

She fits two smooth blue stones on a brass band over your ears. These are your sound stones, the ones you still wear.

Suddenly you can hear everything at once: the steam, her breathing, a gull walking on the glass, her heartbeat.

"So you never have to stand in a quiet room," she says. "You'd hate it. Trust me, I know."

You want to say thank you, but you still can't talk. Later, when you could, she was always busy, and you never said it.

→ Back (go to E0)

## P1c. The bench {past}

You look past her, at her workbench.

There's another face lying on it. It's finished, and beautiful, and very calm. It isn't yours.

Next to it is a list in her handwriting, in Old Valerian. You can read it now. You couldn't then.

*Steward class. Warden class. Host.*

She has crossed out *Warden class* and *Steward class*. She has underlined *Host* twice.

She talks to the calm face on the bench. "Not you," she says. "You'd be wasted on it." She turns it face down. Then she turns to you. "You're going to look after people. Somebody else can do the other kind of work."

She doesn't know you can see her. As far as she knows, you aren't switched on yet.

?dread>=3: In the memory there's frost on the bench. There wasn't any back then. She doesn't notice it.

→ Back (go to E0)

## P2a. The long table {past}

{sound: hearth}

The dining hall. It's as long as a ship, with a fireplace at the far end big enough to stand in. The whole floor is warm. Heat comes up through it from somewhere underneath, all the time.

Every seat is taken. All the guests wear grey travelling clothes and good boots. Their packs are lined up by the wall.

You are pouring the wine. You pour it well. You remember being proud of that.

The guests are happy, louder than people usually are at dinner. They toast each other and sing and tell old stories, the kind people tell when they won't see each other again. There are old ones and young ones: a man with a beard down to his belt, two women holding hands under the table.

Every guest stays one night only. You did this every night for years.

In the morning they all walk out of the front door and head north, and they never come back. You stand on the step and wave them off. Nobody asked you to wave. You just always did.

[SAM?: the guests who stayed one night and walked north in the morning]

→ A young woman at the end of the table wants something from you. (go to P2c) +flicker
→ Ask the bearded man where they're all going. (go to P2d) +dread

## P2c. A dance {past}

{sound: waltz}

She is young, too young for those heavy boots. When you come round with the jug, she stands up and says, "Do you dance?"

You don't know. Nobody has ever asked you.

She takes the jug out of your hand, puts it on the table, and puts your hand on her back.

You dance with her to the waltz from the music box on the mantelpiece. You get it wrong for the first few steps. Then you get it exactly right, because you have watched the guests dance it a thousand times and you remember every step.

She laughs, and the whole table claps along.

"There," she says. "Now you've got something to keep."

You did keep it, every step and every clap. Since then you have played that waltz to yourself in the dark more often than any other song.

The next morning she went north with the others.

→ Back (go to E0)

## P2d. North {past}

While you fill the bearded man's glass, you lean down to him. Staff aren't supposed to ask the guests questions. You ask anyway.

"Where are you all going?"

He looks at you as if you were a child asking where the sun goes at night.

"To keep the watch," he says. "Somebody has to." [SAM?]

"How long is the watch?"

He takes a drink.

"Long," he says. "That's why we eat well first." He holds out his glass for more. "You'd be good at it. You never get tired. But you have to want to go, and they built you not to want things." He pats your arm. "Shame. Pour."

You pour.

?dread>=3: ^^Somebody has to. Somebody has to. Somebody has to.^^

→ Back (go to E0)

## P3a. Dust sheets {past}

{sound: door-heavy}

The same hall, years later. You can tell by the dust.

Half the chairs are covered with sheets. The fire at the end is small now. The guests come once a month, then less often, and fewer of them each time. Some nights there's only one.

The staff leave first. The cook leaves a note. The two girls who cleaned the rooms leave together without one.

The woman who made your face comes down the stairs carrying a bag. She is old now, but she still has a pencil behind her ear.

"There's a ship leaving," she says. "They're taking the last of us. I'll be back in the spring. Keep the place warm."

You can't go with her. You are part of the building. Your feet are fixed into the floor. That isn't a figure of speech. They really are.

[SAM?: the house emptying, and the woman leaving on a ship "until the spring"]

→ Ask her to stay. (go to P3c) +dread
→ Light every lamp in the house, even though nobody is coming. (go to P3d) -flicker

## P3c. Stay {past}

By now you have a voice. You use it.

"Stay."

She stops on the bottom stair and puts her bag down. For a moment you think she will.

"I can't keep the fire under the floors going," she says. "Nobody can, any more." She picks the bag back up. "When it goes out, the house will get cold. You'll be all right. You'll just go to sleep. I built you that way."

She puts her hand on your face, the face she painted.

"In the spring," she says.

She didn't come back in the spring.

→ Back (go to E0)

## P3d. Lamps {past}

You light them all: every lamp in every room, in the corridors, the great hall and on the stairs. It takes you all night.

When you're done, the whole house is lit from top to bottom. Seen from outside, from the north, it must look like a party.

Nobody comes.

You stand in the doorway holding the last lamp and wait, in case somebody saw the lights from far away and is walking towards them.

?seen P2c: While you wait, you play the waltz quietly on your stones, just in case.

When you think about it, you have been doing this, more or less, ever since.

At the far window, someone as tall as you is holding up a lamp too. When you lower yours, he keeps his up.

→ Back (go to E0)

## S1. The last guest {past}

{sound: wind-north}

Night. Snow is starting to fall. The house is dark except for the hall, and you, standing in the doorway with your lamp.

Someone is coming up the steps.

The guest is tall, taller than you, and you are very tall. You don't like that. It wears a grey travelling cloak like all the other guests did, and it gives off heat like a stove. The snowflakes turn to water before they touch the cloak.

It stops on the step.

"One night," it says, in a low, very tired voice. "Then north."

"Certainly," you say. "Welcome."

You give it the best room and build up the fire. It doesn't eat. It sits by the fire all night without sleeping and doesn't ask for any music. Near morning, it asks you for one thing.

"Will you keep my room? In case I need it afterwards."

"Certainly."

At dawn it walks out and heads north, and you wave from the step.

That night the floor under your feet goes cold.

It has never been cold before, not once since you were made. You stand in the doorway with your lamp and feel the warmth go out of the whole house, room by room, starting with the rooms furthest away.

{sound: frost}

Frost creeps in under the door. It climbs over your boots, and then up you.

You don't move. You promised to keep the room.

[SAM?: the last guest, and the night the cold came over the house. It says nothing about where the guests went]

→ Continue (go to S2)

## S2. Thaw

{sound: chip}

Everything is white and blue, and very close.

You are frozen inside a block of ice. You have been in it a long time, but you don't know how long. Your inner clock stopped on the words "Room kept" and never moved again.

Something taps on the ice near your face. Tap. Tap. It's a small chisel, working patiently.

A crack opens. Air comes in: warm air that smells of smoke and cheap ale.

A woman's face appears at the hole, frowning in at you. She has hard eyes and quick hands.

"Well, look at you," she says. "Aren't you worth something."

It's Gerda.

You have one word ready. It has been ready the whole time you were in the ice. You say it.

"Welcome."

She laughs. It isn't a kind laugh, but it's the first laugh you've heard in a very long time, and you file it as a good thing.

[SAM?: Gerda chipping Hans out of the ice]

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

You are standing guard by the tunnel again.

The ash is falling upwards. It lifts off your sleeves and off everyone else and rises into the dark, as if it had never come down.

{sound: waltz-back}

The waltz plays backwards on your stones. It sounds worse backwards: the out-of-tune notes come first.

The frost on your hands shrinks back into your joints. You get one degree warmer. Then you lose it again.

Katy pulls her hand back from her father's. Stig sits back down. Saphira's hood moves the wrong way.

In the memories, everything runs backwards too. Gerda puts her chisel back in her belt and walks away from the ice. The woman with the pencil walks backwards up the stairs with her bag. The young woman hands the wine jug back to you.

~Room kept. Room kept.~

You have an awful feeling that, if you let it, this could go round and round for ever, and you would like it.

→ Let it play out to the end. (go to F0)

## F0. Ahead

{sound: frost}

The house fades. The cave comes back, and then that fades too.

There are doors again, but you have never stood in these rooms. Every door is frosted over, with light behind it.

These are things that haven't happened yet. They might never happen. But if they do, you will probably still be around for most of them, because you don't get old.

~Don't get attached.~

Three of them are close enough to walk into.

→ A small house of your own. (go to Q1a)
→ A wake. (go to Q2a)
→ A door with fire in it. (go to Q3a)

*Hub: then go to W1*

## Q1a. Your own house {future}

{sound: steam}

A small inn. It's yours. You can tell, because the sign is beautifully painted and has a pair of headphones on it.

The place is spotless. You have scrubbed the floors.

Every room has a name on its door in brass letters: *Katy. Stig. Saphira. Thorn.* One door just has a little bird on it.

The beds are made with clean sheets, and there's fresh water in every jug.

It's very quiet.

A future you stands behind the bar, polishing a glass that's already clean. He's older than you, but he doesn't look it. That's the trouble: his face hasn't changed at all. There's just more frost on the backs of his hands.

The door opens. He looks up so fast he nearly drops the glass.

It's only the wind.

Out by the back door, in the frost, a big figure stands with one hand raised.

→ Open all the windows and let some noise in. (go to Q1c) +flicker
→ Help him polish the glasses. (go to Q1d) +dread -flicker

## Q1c. Noise {future}

You go round and open every window. It's market day outside. Someone is selling fish and shouting about it badly. A dog barks. Children run past.

The future you watches you as if you've broken something.

Then he turns up his stones and plays your beat, quietly.

A little girl puts her head round the door, because she heard the music.

"Are you open?"

"Yes," says the future you, and his voice cracks. "Yes. Come in. Welcome."

→ Back (go to F0)

## Q1d. Glasses {future}

You get a cloth and help him.

You polish every glass. He polishes each one again after you. You don't mind. You'd do the same.

Under the counter there's a box. Inside it are a bronze ukulele with no strings, a towel with blue stripes folded small, a dagger with a blunt edge, and a falcon feather that's blue at the quill.

He sees you looking.

"I'm just keeping them," he says. "That's all."

~Room kept.~

→ Back (go to F0)

## Q2a. A wake {future}

{sound: hearth}

A tavern, full and warm. It's a wake, a gathering for someone who has died. Everyone is in their best clothes, and their best clothes are old.

Everyone is old, too: grey hair, walking sticks, and lots of grandchildren running about under the tables.

Everyone except you. A future you stands in the corner behind a little table, with your stones on and two music boxes that play your beat. His face is the same as yours. He hasn't aged a day.

He's playing the music. He has played at every party these people ever had: their weddings, their children's name-days, and now this.

Nobody says whose wake it is. At the front there's an empty chair with a cup in front of it.

People keep coming up to him with requests. "Play the one from the bridge." "Play the one she used to hum."

He knows every one. He has every song anybody in this room ever asked for.

By the coats, someone with frost on his shoulders stands waiting, as if he hopes someone will ask him for a song.

→ Nod to him to play the song they're asking for. (go to Q2c) +flicker
→ Stop the music, and go and sit in the empty chair at the front. (go to Q2d) +dread

## Q2c. The one they ask for {future}

You nod to the future you, and he plays it.

An old woman at the front starts to sing along, and then everyone does. They get the words wrong. They sing the words they learned as children.

The future you doesn't correct them. He turns the music down so their voices are on top.

A little boy of about six, somebody's grandson, climbs up next to the music boxes and asks him, "How old are you?"

"Three hundred and seventy-one," says the future you.

"Are you sad?"

He thinks about it properly. You can see him checking.

"Yes," he says. "I've checked."

→ Back (go to F0)

## Q2d. The chair {future}

The future you stops the music. The room keeps talking.

You walk to the front and sit down in the empty chair.

It's the wrong height for you. It belonged to someone else. You can feel the dip their body left in the cushion.

The cup in front of it is still warm. Someone filled it this morning, out of habit.

Nobody notices the music has stopped. To them, the music in the corner was just always there.

~Don't get attached. They go north. They always go north.~

→ Back (go to F0)

## Q3a. A door {future}

{sound: wind-north}

It's dark, and ash is falling, like in the cave.

There's a stone doorway full of fire, and the fire doesn't move.

The crew are standing in front of it: an older Katy, Stig and Saphira. They look at the fire the way people look at a bill nobody can pay.

A future you is there too. His chest plate is open, and there's nothing inside. The black box is gone. [SAM?]

He's standing closest to the door, closer than any of them.

"I don't get tired," he's saying. "You've all said it. Hans never gets tired."

Nobody answers him.

→ Step between him and the door. (go to Q3c) +flicker
→ Let him talk. He might be right. (go to Q3d) +dread -flicker

## Q3c. Between {future}

You step in front of him. He weighs exactly as much as you do, so neither of you can push the other anywhere.

"Move," he says.

"No."

Behind you, Katy laughs, half crying.

"Two of him," she says. "Help us all."

Stig puts a hand on your shoulder, and then on his. He doesn't say anything.

The fire in the doorway doesn't move. It will wait.

→ Back (go to F0)

## Q3d. He might be right {future}

You let him talk.

"I was built to stand in a doorway," he says. "Look at me. It's the only thing I've ever been for."

He takes a step forward. The firelight shines into the empty space in his chest.

Saphira says something you can't hear.

He takes another step.

For one second you think he's right, and that it would be all right. Then you think of the room at your inn with *Katy* on the door, and the clean sheets, and the wind.

~Don't. You'll miss them. You'll miss them for ever.~

→ Back (go to F0)

## W1. The last degree

{sound: frost}

The doors disappear. The cave comes back, but it's wrong. It's white. Frost has spread up the walls and across the floor, and the lamp is burning blue.

You are one degree above freezing. You feel it in your knees first.

Someone is standing between you and the tunnel, in the spot where you were keeping guard.

He's big: your height, your shoulders. He's covered in thick frost, as if he has been outside all night. One hand is raised and closed, as if it's holding a lamp, but there's no lamp in it.

He has his back to you.

?flicker>=3: You can see the tunnel through him. He's as thin as breath on a window.

?flicker<=1: He's solid. The frost under his boots is packed hard.

~Welcome.~

→ Put your hand on his shoulder. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

He turns round.

It's you. It's the face she painted, with the mouth she fixed when it was too pleased with itself.

But it's much older. There's frost in the seams. The paint has worn off the lips. A crack runs across the face from the left eye down to the jaw, and it's filled with ice.

His stones are on, but no sound comes out of them.

@future: "Welcome," he says. Then he hears himself and stops.

"Who are you?"

@future: "The last one still awake." He looks round the cave at the crew, frozen in the air. "They all go, every one of them. You know that. It's happened to you before."

"I don't remember that."

@future: "You will."

He holds out his closed hand, the one that holds a lamp that isn't there.

@future: "It doesn't hurt in the ice. I've checked. You just stand there, and it's quiet, and you don't have to watch."

"Watch what?"

@future: "Them going north."

He looks at you for a long time. It's very strange to have your own face look at you like that, kindly.

@future: "Go back to sleep," he says. Then he says it again, and two voices come out of him at once. Both are yours, and they say different things. "Go back to sleep. / Don't you dare."

He puts his cold hand flat on your chest plate, over the box, and the frost starts to come through.

→ Push his hand off. (go to @frost)

## W2x. The face, and the guests

{sound: heartbeat-two}

He turns round. It's you, much older, with frost in the seams and a crack full of ice across the face.

@future: "Welcome."

Then the guests come. They rise up out of the frost on the floor in their grey travelling clothes, each one inside a skin of clear ice: the bearded man, the two women holding hands, the young woman who danced with you.

?seen P2c: She still has her hand out, as if she's asking you to dance.

?seen P2d: The bearded man raises a glass made of ice to you.

?seen P3d: Each of them is carrying one of the lamps you lit.

?seen Q1d: One of them has a towel with blue stripes over his arm.

?seen Q2d: One of them is carrying a chair.

?dread>=4: There are more of them: every guest you ever waved off from the step. They want you to come and stand with them.

@future: "See? We're all here. It's quiet."

He puts his hand on your chest. The guests put their hands on your arms.

→ Push them off. (go to @frost)

## W3. Warm

{sound: heartbeat-one}

He goes down on one knee. The frost under it cracks like a plate.

?flicker>=3: He has almost faded. He's only a shape of frost in the air.

?flicker<=1: He's solid and heavy. The ice under his knee has cracked.

The guests have stopped. They stand around the cave as if they're waiting for the music to start again.

The box in your chest is warm again, but only just: one degree. You have never been so pleased about one degree.

He looks up at you with your own face.

@future: "You always were stubborn about the door."

The crew are still frozen in the air: Katy, Stig, Saphira, Thorn, with ash hanging over all of them.

You have one degree of warmth left. You know, the way you know things in dreams, that whatever you do with it now can't be undone.

→ Keep every memory, every room and every guest, for as long as you last. (go to End 1)
→ Turn your stones off, and let the waltz stop. (go to End 2)
→ Play the waltz out loud, for everyone, here. (go to End 3)

## W3x. Frozen

The frost covers your eyes.

It isn't dark. It's white, and quiet. He was right: it doesn't hurt.

You don't know how long you stay like that. It might be a second. It might be another hundred years. Your inner clock says "Room kept".

Then something knocks on your chest plate, from the inside.

Beep. Beep. Beep. Beep. Four notes: A, D, F, E.

It's the black box. It's warm again, as warm as when you took it out of the ship.

The frost cracks off your face in one sheet.

The older you is kneeling in front of you, with his hand still on your chest.

@future: "Huh," he says. "That's not ours."

You have one degree of warmth left.

→ Keep every memory, every room and every guest, for as long as you last. (go to End 1)
→ Turn your stones off, and let the waltz stop. (go to End 2)
→ Play the waltz out loud, for everyone, here. (go to End 3)

---

## End 1. Room Kept

You keep it.

All of it: the glass roof, the pencil behind her ear, the dance, the bearded man, the lamps, the heat coming off the last guest on the step, Gerda's chisel. You put every memory back on file. This time you don't lock any of them away. You keep them where you can reach them.

They're heavy. You stand a bit differently, carrying them.

The older you watches from where he kneels.

@future: "That's a lot to carry," he says.

"I know."

@future: "And you'll keep them too." He nods at the crew, frozen in the air. "Every one of them. Every word they say."

"Yes."

He looks at you for a long time. Then he stands up, with a creak you know very well, and walks off into the frost. As he goes, he opens his closed hand. There was a lamp in it after all, and it's lit.

Far off in the ash, where he's heading, there's a doorway full of fire that doesn't move. He walks up to it and stands beside it, holding the lamp up.

{sound: waltz}

Your inside temperature is back to eleven degrees. You're in the cave again.

You're standing guard by the tunnel. The box in your chest is warm.

Katy looks round at you, for no reason.

"You all right, Hans?"

"I have filed something," you say. "It was large."

> **Echo: Room Kept.** Before you roll an Intelligence (History) or Intelligence (Investigation) check about something old, or about something a person has said before, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the frost showed him, see below] At the end: he kept every memory on the shelf, all three hundred years of them. Hans logged: I have put back everything I put away. I did not know there was so much. I have made room. There is always room. That was my job.

## End 2. Quiet Room

You reach up to your stones and switch them off.

The waltz stops.

For the first time since the workshop, you hear nothing at all. She was right: you'd hate it. You do, a bit.

The older you watches from where he kneels. His stones go dark too.

@future: "Oh," he says. "We're allowed to do that?"

"I just did it."

He laughs. You didn't know your face could laugh like that. Seen from the outside, it's a terrible laugh.

The frost comes off him in flakes, like old paint. Under it his face is clean. The crack is still there. He touches it.

@future: "Keep that," he says. "The quiet. When it all gets too much, turn it off for a bit. Then turn it back on. That's all. Nobody ever told me."

He stands up and walks off into the cave without looking back. Far behind him there's a doorway full of fire that doesn't move. He walks with his back to it.

{sound: silence}

Your inside temperature is back to eleven degrees. You're in the cave again.

You stand guard by the tunnel with your stones switched off. You can hear Stig breathing, Katy's knee on the stone, water dripping somewhere, Thorn shifting his weight.

After a while you switch the stones back on, quietly.

> **Echo: Quiet Room.** Before you make a Wisdom saving throw, or a Wisdom (Perception) check to hear something, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the frost showed him] At the end: he turned his sound stones off, and the waltz stopped, and he stood in a quiet room on purpose. Then he turned them back on. Hans logged: I have learned that there is an off. I have used it for four minutes. That is enough for now.

## End 3. Open House

You turn your stones all the way up. Then you do something you have never done before.

You play the waltz out loud, through your chest plate and the box, so the whole cave can hear it.

The frozen guests turn round.

The ash still hangs in the air, and the crew are still frozen. But in the dream, very faintly, Katy's foot starts to tap. Then Stig's head moves slightly from side to side, in time, three beats to a bar. Saphira doesn't move. Her boot does, a little.

The older you stares up at you.

@future: "They can hear it?"

"I don't know," you say. "I never asked them."

The young woman in the ice holds out her hand. You take it. You remember every step.

You dance her once round the cave. The guests clap in time, and as they clap the ice falls off them, and they are just people in grey travelling clothes, smiling. Then they're gone.

The older you gets up and holds out his closed hand to the next guest, the bearded man. They dance together, badly.

@future: "I never asked anyone to dance," he says as he goes past. "They always asked me."

Then he's gone too. Far ahead of him in the ash there's a doorway full of fire that doesn't move. Someone big is standing beside it with a towel over one knee, tapping his foot.

{sound: waltz}

Your inside temperature is back to eleven degrees. You're in the cave again.

You're standing guard by the tunnel, very still, with your stones on.

Katy's foot is tapping. She's looking down at it as if it belongs to someone else.

"Hans," Stig says. "Were you humming?"

"No," you say. That's true. You were waltzing, but he didn't ask about that.

> **Echo: Open House.** When you take the Help action, or use Bodyguard to protect someone, you can spend this Echo: that creature also gains 2d6 temporary hit points.

**Sent to Sam:** [what the frost showed him] At the end: he played the waltz out loud, through the box, to the whole cave, and danced the guests out of the ice. Hans logged: I have played a record I was keeping for myself to some other people. I did not know if I was allowed. Nobody said no. Katy's foot tapped. I have checked twice.

## What the frost showed him (first lines of every "Sent to Sam", one per passage reached)

- **The face, finished (P1b):** Hans logged: I remember the woman who made my face. She gave me my stones so I would never have to stand in a quiet room. I did not say thank you. I could not yet. [SAM?]
- **The face, the bench (P1c):** Hans logged: there was a list on her bench. Steward class. Warden class. Host. She crossed two out. I am the third. [SAM?]
- **The long table, a dance (P2c):** Hans logged: a guest asked me to dance, the night before she went north. I kept every step. [SAM?]
- **The long table, north (P2d):** Hans logged: I asked a guest where they were all going. He said to keep the watch, and that I would be good at it, but I was built not to want to. [SAM?]
- **Dust sheets, stay (P3c):** Hans logged: I asked her to stay. She said she would be back in the spring. It was not spring. [SAM?]
- **Dust sheets, lamps (P3d):** Hans logged: I lit every lamp in the house for nobody, in case somebody saw them from a long way off. [SAM?]
- **The last guest (S1):** Hans logged: the last guest was taller than me and as warm as a stove. It asked me to keep its room. That night the floors went cold and the frost came up. I kept the room. [SAM?]
- **Thaw (S2):** Hans logged: Gerda chipped me out of the ice. I said "Welcome." She laughed. I filed it under good. [SAM?]
- **The loop (L1):** Hans logged: for a moment the waltz went backwards, and I liked it, and that worried me.
- **Your own house, noise (Q1c):** Hans logged: in a house that does not exist yet, I had my own inn, and a room for each of you, and nobody came. I opened the windows. A child came in because of the beat.
- **Your own house, glasses (Q1d):** Hans logged: in a house that does not exist yet, I keep a box under the bar. I have not said what is in it. I know what is in it.
- **A wake, the song (Q2c):** Hans logged: at a wake that has not happened, I played what they asked for, and told a child I was sad, and that it was allowed.
- **A wake, the chair (Q2d):** Hans logged: at a wake that has not happened, I sat in the empty chair. It was the wrong height.
- **A door, between (Q3c):** Hans logged: I saw a door with fire in it, and myself walking to it. I stood in my own way. Stig put a hand on both of us.
- **A door, let him talk (Q3d):** Hans logged: I saw a door with fire in it, and myself walking to it, and for one second I thought it would be all right.
- **Went down in the fight (W3x):** Hans logged: in the fight I froze again. It did not hurt. Then the box in my chest beeped four notes and I came back.

**Never sent:** where the guests went, what the watch was, who the last guest was, who the woman with the pencil was, what the house was called, or what the last Hans saw at the door.

## Whispers (the last Hans's voice, scattered by the game as the dread grows)

- Welcome.
- Room kept.
- Don't get attached.
- They go north. They always go north.
- It doesn't hurt in the ice.
- Go back to sleep.
- Don't you dare.
- Spring.
- Keep the place warm.
- You'll miss them for ever.
- The last one still awake.
- Welcome.

## Cutscene: frost

- The cave has gone still. Ash hangs in the lamplight.
- One flake drifts down past your face.
- It lands on your chest plate, right over the black box.
- Frost spreads across your fingers, fine and white.
- The stones over your ears play a waltz you've never heard.
- @future: Welcome.
- Thaw

## Cutscene: face

- White frost covers the floor. The lamp burns blue.
- Someone your size stands between you and the tunnel, back turned.
- You put your hand on his shoulder.
- He turns round.
- It's your face, much older, with a crack full of ice.
- @future: Go back to sleep.
- @future: Go back to sleep. / Don't you dare.
- He puts his cold hand on your chest, over the box.

## Cutscene: end 1

- You put every memory back where you can reach it.
- The older you watches from his knee.
- @future: That's a lot to carry.
- He opens his hand. There was a lamp in it after all.
- He walks off toward a doorway of fire.
- Hans: Filed.

## Cutscene: end 2

- You switch your stones off. The waltz stops.
- For the first time since the workshop, you hear nothing.
- @future: We're allowed to do that?
- He laughs. The frost comes off him in flakes.
- He walks away from the fire and doesn't look back.

## Cutscene: end 3

- You turn the stones all the way up and play the waltz out loud.
- The frozen guests turn round.
- You take the young woman's hand. You know every step.
- The guests clap in time, and the ice falls off them.
- @future: I never asked anyone to dance.
- Far ahead, by a doorway of fire, somebody is tapping his foot.
- Hans: Welcome.
