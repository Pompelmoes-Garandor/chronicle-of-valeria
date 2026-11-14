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

You are on guard at the mouth of the tunnel, a position you chose yourself. Nobody enters the cave without passing you.

Ash has been falling all day. You do not breathe, so it is no trouble to you. There are four thousand and eleven flakes on your left sleeve. You have not counted the right sleeve. The figure would be the same.

The crew are resting behind you. Katy is sitting with her father. Stig is on his stone with his towel. Saphira has her back to the wall and Thorn is by the fire. Every few minutes you turn to check whether anyone requires anything. That was your work for many years, and you still do it. Nobody has required anything for an hour.

The black box from the wrecked ship is in your chest, behind the plate. It has been warm ever since you carried it out of the wreck.

One flake comes down past your face and lands on the seam of your chest plate, directly over the box.

{sound: frost}

The box goes cold. A draught passes through your chest. There has never been a draught in there before.

Then the blue stones over your ears begin to play. They play only on your instruction, and they play your beat. This is an old, slow waltz for a music box and strings, slightly out of tune.

{sound: waltz}

You keep everything you have seen or heard on file. You search the file for this waltz and there is no entry.

You check your internal temperature. It is down by one degree.

→ Continue (go to H2)

## H2. Held

The ash stops in the air.

The flakes hang in the lamplight. Katy's hand has stopped halfway to her father's. Stig is halfway out of his seat. Saphira's hood is in the middle of a movement. You are the only one in the cave still moving.

There is frost on your fingers, a fine white layer in the joints. You think: the last time I had frost on my fingers was...

The thought ends there. The rest of the entry is missing from your file, and the place where it should be is cold.

~Welcome.~

That was your voice. You did not speak.

→ Continue (go to H3)

## H3. Cold

You look at your hands. The frost is moving up the backs of them, slowly.

Your face plate creaks. You know that creak. You listened to it for a very long time once, and you cannot say when.

The waltz goes on. Under it, a long way off, a large fire is burning in a stone room and people are talking.

{sound: hearth}

The cave grows faint. Behind it there is warm gold light with steam in it.

~Room kept.~

A long time ago you locked certain records away. They are opening now, one after another.

→ Let them come. (go to E0)

## E0. What the house remembers

You are standing in a doorway of oak and brass, and the floor is warm under your feet. You know it at once. It is the front door of the house where you were made. You stood at it for years.

The cave is behind you. In front of you is a long corridor of doors. Each door opens on a room of that house.

You were built to stand in one place and be of use, so you did not move about much. You still know the floor of each of those rooms through your feet.

Three of the doors are near enough to walk through.

→ A glass roof, and a woman with a screwdriver. (go to P1a)
→ A long table, and guests in grey. (go to P2a)
→ Dust sheets. (go to P3a)

*Hub: then go to S1*

## P1a. A face {past}

{sound: steam}

A workshop with a glass roof. The glass is new, and clean enough that you can hardly see it. The sky through it is very blue. Steam pipes run along every wall and knock from time to time.

You are sitting on a stool, unfinished. Only your eyes work.

A woman sits in front of you with a tray of small tools. She has grey in her hair and soot on one cheek, and she keeps a pencil behind her ear. She is painting your face.

She works slowly. After each touch of paint she leans back to look.

"No," she says to your mouth. "That smile's too pleased with itself."

She corrects it. "There. Now you look like someone who'll still be up when the guests get in late."

You cannot answer her, because you have no voice yet. It is the first time you remember wanting a voice.

[SAM?: the house when it was new, and the woman who made Hans's face]

→ Let her finish the face. (go to P1b) -flicker
→ Look at what is on the bench beside her. (go to P1c) +dread

## P1b. Finished {past}

You let her work, and it takes the whole afternoon. The sun crosses the glass roof. She hums as she paints, and what she hums is the waltz. She goes out of tune in the same places as the music on your stones.

When she has finished she sits back and looks at you for a long time.

"Right," she says. "One last thing."

She fits a brass band over your head, with a smooth blue stone for each ear. These are your sound stones. You still wear them.

You hear everything at once: the steam, her breathing, a gull walking on the glass, her heartbeat.

"So you never have to stand in a quiet room," she says. "You'd hate it. Trust me, I know."

You want to thank her and you still cannot speak. Later you could, but she was always busy. You never said it.

→ Back (go to E0)

## P1c. The bench {past}

You look past her to the workbench.

A second face is lying on it, finished. It is beautiful and very calm, and it is not yours.

Beside it is a list in her handwriting, in Old Valerian. You could not read it then. You can now.

*Steward class. Warden class. Host.*

She has crossed out the first two. She has underlined Host twice.

She speaks to the calm face. "Not you. You'd be wasted on it." She turns it face down on the bench and turns to you. "You're going to look after people. Somebody else can do the other kind of work."

She does not know that you can see her. As far as she knows, you have not been switched on.

?dread>=3: In this record there is frost on the bench. There was none on the day. She does not notice it.

→ Back (go to E0)

## P2a. The long table {past}

{sound: hearth}

The dining hall is very long, and the fireplace at the far end is big enough to stand in. The whole floor is warm. The heat comes up through it from below and never stops.

Every seat is taken. The guests all wear grey travelling clothes and good boots, and their packs stand in a row along the wall.

You are pouring the wine. You pour it well, and you remember being proud of that.

The guests are happy, and louder than people usually are at dinner. They toast one another and sing, and they tell the old stories people tell when they will not meet again. Some of them are old and some are young. One man has a beard down to his belt. Two women are holding hands under the table.

Each guest stays for one night. You served this dinner every night for years.

In the morning they all leave by the front door and walk north, and none of them comes back. You stand on the step and wave them off, which nobody instructed you to do.

[SAM?: the guests who stayed one night and walked north in the morning]

→ A young woman at the end of the table wants something from you. (go to P2c) +flicker
→ Ask the bearded man where they are all going. (go to P2d) +dread

## P2c. A dance {past}

{sound: waltz}

She is young, too young for boots that heavy. When you come round with the jug she stands up.

"Do you dance?"

You do not know. Nobody has asked you before.

She takes the jug out of your hand and sets it on the table. Then she puts your hand on her back.

The music box on the mantelpiece is playing the waltz, and you dance it with her. Your first few steps are wrong. After that every step is correct, because you have watched the guests dance this waltz a thousand times and you have all of it on file.

She laughs. The whole table claps in time.

"There," she says. "Now you've got something to keep."

You kept it, each step and each clap. You have played that waltz to yourself in the dark more often than any other piece of music.

In the morning she went north with the others.

→ Back (go to E0)

## P2d. North {past}

You fill the bearded man's glass and lean down to him. Staff do not put questions to guests. You put one.

"Where are you all going?"

He looks at you as if you were a child asking where the sun goes at night.

"To keep the watch," he says. "Somebody has to." [SAM?]

"How long is the watch?"

"Long," he says, when he has had a drink. "That's why we eat well first." He holds out his glass for more. "You'd be good at it. You never get tired. But you have to want to go, and they built you not to want things." He pats your arm. "Shame. Pour."

You pour.

?dread>=3: ^^Somebody has to. Somebody has to. Somebody has to.^^

→ Back (go to E0)

## P3a. Dust sheets {past}

{sound: door-heavy}

The same hall, some years on. You can date it by the dust.

Half the chairs are under sheets and the fire at the far end is small. Guests come once a month, then less often, and there are fewer of them each time. On some nights there is one.

The staff go first. The cook leaves a note. The two girls who cleaned the rooms leave together, without a note.

The woman who made your face comes down the stairs with a bag. She is old now. The pencil is still behind her ear.

"There's a ship leaving," she says. "They're taking the last of us. I'll be back in the spring. Keep the place warm."

You cannot go with her. You are part of the building, and your feet are fixed into its floor.

[SAM?: the house emptying, and the woman leaving on a ship "until the spring"]

→ Ask her to stay. (go to P3c) +dread
→ Light every lamp in the house, even though nobody is coming. (go to P3d) -flicker

## P3c. Stay {past}

You have a voice by now, and you use it.

"Stay."

She stops on the bottom stair and puts the bag down. You think she is going to stay.

"I can't keep the fire under the floors going," she says. "Nobody can, any more." She picks the bag up again. "When it goes out, the house will get cold. You'll be all right. You'll just go to sleep. I built you that way."

She lays her hand on your face, which she painted.

"In the spring," she says.

She did not come back in the spring.

→ Back (go to E0)

## P3d. Lamps {past}

You light all of them. There are lamps in every room and corridor, in the great hall and on the stairs, and it takes you the whole night.

By the end the house is lit from top to bottom. Anyone looking from the north would take it for a party.

Nobody comes.

You stand in the doorway with the last lamp and wait, in case someone a long way off has seen the lights and is walking towards them. When you think about it, you have been doing this, more or less, ever since.

?seen P2c: While you wait you play the waltz on your stones at low volume, for the same reason.

At the far window someone of your height is holding up a lamp as well. You lower yours. He keeps his up.

→ Back (go to E0)

## S1. The last guest {past}

{sound: wind-north}

It is night and snow is beginning to fall. The house is dark apart from the hall. You are in the doorway with your lamp.

Someone is coming up the steps.

You are very tall, and the guest is taller. You do not like that. It wears a grey travelling cloak, the same as all the other guests wore, and it gives off heat like a stove. The snowflakes turn to water before they reach the cloak.

It stops on the step. "One night," it says. Its voice is low and very tired. "Then north."

"Certainly," you say. "Welcome."

You give it the best room and build up the fire. It does not eat or sleep. It sits by the fire all night and asks for no music. Towards morning it makes one request.

"Will you keep my room? In case I need it afterwards."

"Certainly."

At dawn it walks out and goes north. You wave from the step.

That night the floor goes cold under your feet.

The floor has not been cold once since you were made. You stand in the doorway with your lamp while the heat leaves the house one room at a time, beginning with the rooms furthest from you.

{sound: frost}

Frost comes in under the door. It covers your boots and then climbs.

You do not move. You said you would keep the room.

[SAM?: the last guest, and the night the cold came over the house. It says nothing about where the guests went]

→ Continue (go to S2)

## S2. Thaw

{sound: chip}

Everything is white and blue, and very near.

You are inside a block of ice. You have been in it for a long time and you cannot say how long, because your clock stopped on the entry "Room kept" and has not moved since.

A small chisel is tapping at the ice near your face. Tap. Tap. Whoever is holding it is in no hurry.

A crack opens and warm air comes through. The air smells of smoke and cheap ale.

A woman's face appears at the hole and frowns in at you. She has hard eyes and quick hands.

"Well, look at you," she says. "Aren't you worth something." This is Gerda.

You have had one word ready the whole time you were in the ice, and you say it. "Welcome."

She laughs. It is an unkind laugh. It is also the first laugh you have heard in a very long time, so you file it under good.

[SAM?: Gerda chipping Hans out of the ice]

→ Continue (go to L1)

## L1. Again {again}

{sound: rewind}

You are on guard by the tunnel again.

The ash is falling upwards. It lifts off your sleeves and off the others and goes up into the dark.

{sound: waltz-back}

The waltz plays backwards on your stones. It is worse this way round, because the out-of-tune notes come first.

The frost on your hands draws back into the joints. You gain one degree, and then you lose it again.

Katy takes her hand back from her father's. Stig sits down again. Saphira's hood moves the wrong way.

The records run backwards too. Gerda puts the chisel back in her belt and walks away from the ice. The woman with the pencil goes backwards up the stairs with her bag. The young woman hands the wine jug back to you.

~Room kept. Room kept.~

You have an awful feeling that, if you allowed it, this could go round and round for ever, and that you would like it.

→ Let it play out to the end. (go to F0)

## F0. Ahead

{sound: frost}

The house goes. The cave comes back, and then the cave goes as well.

There are doors again. You have not stood in any of these rooms. Each door is covered in frost and has light behind it.

Behind them are things that have not happened and may never happen. If they do, you will most likely be present for the greater part, since you do not age.

~Don't get attached.~

Three of the doors are near enough to walk through.

→ A small house of your own. (go to Q1a)
→ A wake. (go to Q2a)
→ A door with fire in it. (go to Q3a)

*Hub: then go to W1*

## Q1a. Your own house {future}

{sound: steam}

A small inn. It is yours. You can tell, because the sign is very well painted and has a pair of headphones on it.

The floors are spotless. You scrubbed them yourself.

Each room has a name on its door in brass letters: Katy, Stig, Saphira, Thorn. One door has a small bird on it and no name.

The beds are made up with clean sheets, and every jug has fresh water in it. The house is very quiet.

A future you is behind the bar, polishing a glass that is already clean. He is older than you, and his face does not show it. The one difference you can find is more frost on the backs of his hands.

The door opens. He looks up so quickly that he nearly drops the glass. It is the wind.

Out by the back door, in the frost, a large figure is standing with one hand raised.

→ Open all the windows and let some noise in. (go to Q1c) +flicker
→ Help him polish the glasses. (go to Q1d) +dread -flicker

## Q1c. Noise {future}

You go round the inn and open every window. It is market day outside. Someone is selling fish and shouting about it badly. Children run past, and a dog barks.

The future you watches you as if you have broken something.

Then he turns up his stones and plays your beat, quietly.

A small girl puts her head round the door. She has heard the music.

"Are you open?"

"Yes," says the future you, and his voice cracks on it. "Yes. Come in. Welcome."

→ Back (go to F0)

## Q1d. Glasses {future}

You fetch a cloth and help him.

You polish every glass. He polishes each one again after you. You take no offence, since you would do the same.

There is a box under the counter. Inside it are a bronze ukulele with no strings, a towel with blue stripes folded small, a dagger with a blunt edge, and a falcon feather that is blue at the quill.

He sees you looking. "I'm just keeping them," he says. "That's all."

~Room kept.~

→ Back (go to F0)

## Q2a. A wake {future}

{sound: hearth}

A tavern, full and warm. This is a wake, which is a gathering held for someone who has died. Everyone has come in their best clothes, and the best clothes are old.

The people are old as well, with grey hair and walking sticks. A great many grandchildren are running about under the tables.

A future you is in the corner behind a small table. He has his stones on and two music boxes that play your beat. His face is yours, and it has not aged by a day.

He has provided the music at every party these people ever held, at their weddings and their children's name-days, and now at this.

Nobody says whose wake it is. At the front there is an empty chair with a cup set in front of it.

People come up to him with requests. "Play the one from the bridge." "Play the one she used to hum."

He has every song that anyone in this room ever asked him for.

By the coats someone with frost on his shoulders stands waiting, as if he hopes someone will ask him for a song.

→ Nod to him to play the song they are asking for. (go to Q2c) +flicker
→ Stop the music, and go and sit in the empty chair at the front. (go to Q2d) +dread

## Q2c. The one they ask for {future}

You nod to the future you and he plays it.

An old woman at the front begins to sing, and then the whole room does. They have the words wrong. They are singing the words they learned as children.

The future you does not correct them. He turns the music down so that their voices are on top.

A boy of about six, somebody's grandson, climbs up beside the music boxes. "How old are you?"

"Three hundred and seventy-one," says the future you.

"Are you sad?"

He does not answer at once. You can see him running the check.

"Yes," he says. "I've checked."

→ Back (go to F0)

## Q2d. The chair {future}

The future you stops the music. The room goes on talking.

You walk to the front and sit down in the empty chair.

It is the wrong height for you. It was someone else's chair, and the cushion still has the dip their body made.

The cup in front of it is warm. Someone filled it this morning out of habit.

Nobody has noticed that the music stopped. As far as they are concerned, there has always been music in that corner.

~Don't get attached. They go north. They always go north.~

→ Back (go to F0)

## Q3a. A door {future}

{sound: wind-north}

It is dark and ash is falling, as it is in the cave.

There is a stone doorway full of fire. The fire does not move.

Katy, Stig and Saphira are standing in front of it, all of them older. They have the faces of guests who have been handed a bill they cannot pay.

A future you is with them. His chest plate is open and the space behind it is empty. The black box is gone. [SAM?]

He is standing nearer to the door than any of them. "I don't get tired," he is saying. "You've all said it. Hans never gets tired."

Nobody answers him.

→ Step between him and the door. (go to Q3c) +flicker
→ Let him talk. He might be right. (go to Q3d) +dread -flicker

## Q3c. Between {future}

You step in front of him. He weighs exactly what you weigh, so neither of you can move the other.

"Move," he says.

"No."

Behind you Katy laughs, and she is half crying. "Two of him," she says. "Help us all."

Stig puts one hand on your shoulder and the other on his. He says nothing.

The fire in the doorway does not move. It will wait.

→ Back (go to F0)

## Q3d. He might be right {future}

You let him talk.

"I was built to stand in a doorway," he says. "Look at me. It's the only thing I've ever been for."

He takes a step forward. The firelight goes into the empty space in his chest.

Saphira says a few words that you cannot hear, and he takes another step.

For one second you think he is right, and that it would be all right. Then you think of a room at an inn of your own, with Katy's name on the door and clean sheets on the bed, and the wind.

~Don't. You'll miss them. You'll miss them for ever.~

→ Back (go to F0)

## W1. The last degree

{sound: frost}

The doors go. The cave comes back, and it is white. Frost has spread across the floor and up the walls, and the lamp is burning blue.

You are one degree above freezing. You feel it in your knees first.

Someone is standing between you and the tunnel, on the spot where you were keeping guard.

He has your height and your shoulders. He is covered in thick frost, the kind that forms on anything left out all night. One hand is raised and closed in the grip you use for a lamp. There is no lamp in it. He has his back to you.

?flicker>=3: You can see the tunnel through him. He is as thin as breath on a window.

?flicker<=1: He is solid. The frost under his boots is packed hard.

~Welcome.~

→ Put your hand on his shoulder. (go to W2 if dread<4 / W2x)

## W2. The face

{sound: heartbeat-two}

He turns round.

It is your face, the one she painted, with the mouth she corrected for being too pleased with itself.

It is much older. There is frost in the seams and the paint has worn off the lips. A crack runs from the left eye down to the jaw, and the crack is full of ice.

His stones are on. No sound is coming out of them.

@future: "Welcome," he says. Then he hears himself and stops.

"Who are you?"

@future: "The last one still awake." He looks round the cave at the crew, who are held where they stopped. "They all go, every one of them. You know that. It's happened to you before."

"I do not remember that."

@future: "You will."

He holds out his closed hand, the one with no lamp in it.

@future: "It doesn't hurt in the ice. I've checked. You stand there and it's quiet. You don't have to watch."

"Watch what?"

@future: "Them going north."

He looks at you for a long time, and kindly. It is very strange to have your own face look at you like that.

@future: "Go back to sleep," he says. Then he says it again, and two voices come out of him at once. Both are yours, and they say different things. "Go back to sleep. / Don't you dare."

He lays his cold hand flat on your chest plate, over the box, and the frost starts to come through.

→ Push his hand off. (go to @frost)

## W2x. The face, and the guests

{sound: heartbeat-two}

He turns round. It is your face, much older, with frost in the seams and a crack across it that is full of ice.

@future: "Welcome."

Then the guests come up out of the frost on the floor. They are in their grey travelling clothes, and each of them is inside a skin of clear ice. You count the bearded man, the two women holding hands, the young woman from the end of the table.

?seen P2c: She is holding out her hand to you, as she did when she asked you to dance.

?seen P2d: The bearded man raises a glass to you. The glass is made of ice.

?seen P3d: Each of them is carrying one of the lamps you lit.

?seen Q1d: One of them has a towel with blue stripes over his arm.

?seen Q2d: One of them is carrying a chair.

?dread>=4: There are more of them now. Every guest you ever waved off from the step is here, and they want you to come and stand with them.

@future: "See? We're all here. It's quiet."

He puts his hand on your chest. The guests put theirs on your arms.

→ Push them off. (go to @frost)

## W3. Warm

{sound: heartbeat-one}

He goes down on one knee, and the frost cracks under it.

?flicker>=3: There is very little of him left. He is an outline of frost in the air.

?flicker<=1: He is solid and heavy. The ice under his knee has cracked.

The guests have stopped. They stand about the cave as if they are waiting for the music to start again.

The box in your chest is warm again, by one degree. You have never been so pleased with one degree.

He looks up at you with your own face.

@future: "You always were stubborn about the door."

The crew have not moved. Katy, Stig, Saphira and Thorn are where they stopped, with the ash hanging over them.

You have one degree of warmth to spend. You know, as you know things in dreams, that whatever you spend it on cannot be undone.

→ Keep every memory, every room and every guest, for as long as you last. (go to End 1)
→ Turn your stones off, and let the waltz stop. (go to End 2)
→ Play the waltz out loud, for everyone, here. (go to End 3)

## W3x. Frozen

The frost closes over your eyes.

It is white in here, and quiet. He was right that it does not hurt.

You cannot say how long you stay like this. It may be one second or another hundred years, and your clock is no help. It reads "Room kept".

Then there is a knock on your chest plate, from the inside.

Beep. Beep. Beep. Beep. Four notes: A, D, F, E.

It is the black box, as warm as on the day you took it out of the ship.

The frost comes off your face in one sheet.

The older you is kneeling in front of you with his hand still on your chest.

@future: "Huh," he says. "That's not ours."

You have one degree of warmth left.

→ Keep every memory, every room and every guest, for as long as you last. (go to End 1)
→ Turn your stones off, and let the waltz stop. (go to End 2)
→ Play the waltz out loud, for everyone, here. (go to End 3)

---

## End 1. Room Kept

You keep all of it. You keep the glass roof, the pencil behind her ear, the long table, the dust sheets, the heat off the last guest on the step, Gerda's chisel. Every record goes back on file where you can reach it, and this time you lock none away.

They are heavy. You adjust your stance to carry them.

The older you watches from where he is kneeling.

@future: "That's a lot to carry," he says.

"I know."

@future: "And you'll keep them too." He nods at the crew. "Every one of them. Every word they say."

"Yes."

He looks at you for a long time. Then he stands, with a creak you know very well, and walks away into the frost. As he goes he opens his closed hand. There was a lamp in it after all, and it is lit.

A long way off in the ash, in the direction he is walking, there is a doorway full of fire that does not move. He reaches it and stands beside it with the lamp held up.

{sound: waltz}

Your internal temperature is back at eleven degrees. You are in the cave again, on guard by the tunnel, and the box in your chest is warm.

Katy looks round at you, for no reason.

"You all right, Hans?"

"I have filed something," you say. "It was large."

> **Echo: Room Kept.** Before you roll an Intelligence (History) or Intelligence (Investigation) check about something old, or about something a person has said before, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the frost showed him, see below] At the end: he kept every memory on the shelf, all three hundred years of them. Hans logged: I have put back everything I put away. I did not know there was so much. I have made room. There is always room. That was my job.

## End 2. Quiet Room

You reach up and switch your stones off. The waltz stops.

For the first time since the workshop you hear nothing at all. She said you would hate it, and you do, somewhat.

The older you watches from where he is kneeling. His stones go dark as well.

@future: "Oh," he says. "We're allowed to do that?"

"I just did it."

He laughs. You did not know your face could do that. From the outside it is a terrible laugh.

The frost comes off him in flakes, like old paint. Under it his face is clean. The crack is still there, and he touches it.

@future: "Keep that," he says. "The quiet. When it all gets too much, turn it off for a bit. Then turn it back on. That's all. Nobody ever told me."

He stands up and walks off into the cave. He does not look back. A long way behind him there is a doorway full of fire that does not move, and he keeps his back to it.

{sound: silence}

Your internal temperature is back at eleven degrees. You are in the cave again.

You are on guard by the tunnel with your stones switched off. You can hear Stig breathing, Katy's knee moving on the stone, water dripping somewhere, Thorn shifting his weight.

After a while you switch the stones back on, quietly.

> **Echo: Quiet Room.** Before you make a Wisdom saving throw, or a Wisdom (Perception) check to hear something, you can spend this Echo to have advantage on it.

**Sent to Sam:** [what the frost showed him] At the end: he turned his sound stones off, and the waltz stopped, and he stood in a quiet room on purpose. Then he turned them back on. Hans logged: I have learned that there is an off. I have used it for four minutes. That is enough for now.

## End 3. Open House

You turn your stones up as far as they go. Then you do a thing you have never done. You play the waltz out loud, through your chest plate and the box, so that the whole cave can hear it.

The frozen guests turn round.

The ash is still hanging and the crew have still not moved. In the dream, though, Katy's foot begins to tap, very faintly. Then Stig's head goes a little from side to side, in time, three beats to the bar. Saphira keeps still, apart from one boot.

The older you stares up at you.

@future: "They can hear it?"

"I do not know," you say. "I never asked them."

The young woman in the ice holds out her hand and you take it. You have every step on file.

You dance her once round the cave. The guests clap in time. As they clap the ice falls off them, and they are people in grey travelling clothes, smiling. Then they are gone.

The older you gets up and offers his closed hand to the next guest, who is the bearded man. They dance together, badly.

@future: "I never asked anyone to dance," he says as he passes. "They always asked me."

Then he is gone as well. A long way ahead of him in the ash there is a doorway full of fire that does not move. Someone big is standing beside it with a towel over one knee, tapping his foot.

{sound: waltz}

Your internal temperature is back at eleven degrees. You are in the cave again.

You are on guard by the tunnel, standing very still, with your stones on.

Katy's foot is tapping. She is looking down at it as if it belongs to someone else.

"Hans," Stig says. "Were you humming?"

"No," you say. That is true. You were waltzing, and he did not ask about that.

> **Echo: Open House.** When you take the Help action, or use Bodyguard to protect someone, you can spend this Echo: that creature also gains 2d6 temporary hit points.

**Sent to Sam:** [what the frost showed him] At the end: he played the waltz out loud, through the box, to the whole cave, and danced the guests out of the ice. Hans logged: I have played a record I was keeping for myself to some other people. I did not know if I was allowed. Nobody said no. Katy's foot tapped. I have checked twice.

## What the frost showed him (first lines of every "Sent to Sam", one per passage reached)

- **The face, finished (P1b):** Hans logged: I remember the woman who made my face. She gave me my stones so I would never have to stand in a quiet room. I did not say thank you. I could not speak yet. [SAM?]
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
- One flake comes down past your face.
- It lands on your chest plate, directly over the black box.
- Frost spreads across your fingers, fine and white.
- The stones over your ears play a waltz that is not on your file.
- @future: Welcome.
- Thaw

## Cutscene: face

- White frost covers the floor. The lamp burns blue.
- Someone your size stands between you and the tunnel, with his back to you.
- You put your hand on his shoulder.
- He turns round.
- It is your face, much older, with a crack full of ice.
- @future: Go back to sleep.
- @future: Go back to sleep. / Don't you dare.
- He lays his cold hand on your chest, over the box.

## Cutscene: end 1

- You put every record back where you can reach it.
- The older you watches from one knee.
- @future: That's a lot to carry.
- He opens his hand. There was a lamp in it after all.
- He walks off toward a doorway of fire.
- Hans: Filed.

## Cutscene: end 2

- You switch your stones off. The waltz stops.
- For the first time since the workshop, you hear nothing.
- @future: We're allowed to do that?
- He laughs. The frost comes off him in flakes.
- He walks away from the fire and does not look back.

## Cutscene: end 3

- You turn the stones up as far as they go and play the waltz out loud.
- The frozen guests turn round.
- You take the young woman's hand. You have every step on file.
- The guests clap in time, and the ice falls off them.
- @future: I never asked anyone to dance.
- Far ahead, by a doorway of fire, somebody is tapping his foot.
- Hans: Welcome.
