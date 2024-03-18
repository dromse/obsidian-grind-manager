**🚧 In nescent state of development! Things change fast...❗️**

Planned release: 01-04-2024

# Grind Manager

(picture)

## Introduction

Unleash the magic of Grind Manager, merging task management with rewards system to your Obsidian workspace!  
Earn coins by completing tasks and acquire epic rewards!  
It's your ticket to excitement and adventure in your digital domain!

## Features

- **Tasks**: View all tasks in your vault.
- **Filters**: Filter tasks by completion status, or recurring, or search by content.
- **Rewards**: Purchase rewards with earned coins.
- **History**: View history of earnings and spending.
- **Recurrence**: Instead of duplicating recurring tasks, tasks save to history and will be shown in the task list when the time comes.
- **Counters and Timers**: Use counters and timers to track task completion.
- **Bindings**: Bind YAML properties to tasks for updating when tasks are completed.
- **Difficulty**: Set difficulty level to earn coins based on it.

## Task Tracking

### Tags

In Grind Manager #tags is used for metadata. Currently list of tags in using:

- bind: #bind/yaml-property (e.g. #bind/coding)
- counter: #count/current | #count/current/goal | #count/current/goal/unit (e.g. #count/3 | #count/1/4 | #count/1/4/hour)
- every: #every/recurrence/time (e.g. #every/day | #every/1day | #every/1d | #every/day/12-00)
- timer: #timer/current | #timer/current/goal #timer (e.g. #timer/3h32m10s | #timer/1h32m2s/4h)
- difficulty: #diff/difficulty (e.g. #diff/trivial | #diff/easy | #diff/medium | #diff/hard)
- per: #per/amount (e.g. #per/10 | #per/1h)
- at: #at/date/time (e.g. #at/1-1-2024/12-00)

### Timer

You can use timer to track your time on current task using built-in Grind Manager timer.

#### With `#diff`

If you want to get rewards by every hour instead of 4 you need to

```markdown
- [ ] coding for 4 hours #timer/0/4h #diff/hard
```

### CompletedAt

Also for completed date is used link on daily note

- WikiLink `✅ [[2024-03-13|2024-03-13 | 21:46]]`
- Markdown Link `✅ [2024-03-13 | 21:46](Everyday/2024-03-13.md)`

### Statuses

By default statuses is (you can change it in settings):
To compatability with Obsidian Tasks plugin statuses is used:

- `- [ ] todo` - planned for execution.
- `- [/] doing` - currently in progress.
- `- [x] done` - completed
- `- [-] denied` - not of interest or for other reasons.
- `- [?] delay` - in progress but paused
- `- [>] forward` - on review or deligated.

```markdown
# Uncompleted task

- [ ] watch video about optimization #diff/easy

# Task in progress

- [/] watch video about optimization #diff/easy

# Completed task

- [x] watch video about optimization #diff/easy ✅ [[2024-03-13|2024-03-13 | 21:46]]
```

### Difficulty

By default difficulty earnings is (you can change it in settings):

- trivial - 0.1
- easy - 1
- medium - 2.5
- hard - 5

#### With `#per`

`#per` tag is used when you want to save to history on some condition.

```markdown
<!-- Without per -->

- [ ] coding for 4 hours #diff/hard #timer/0/4h

<!-- History file -->

5 | coding for 4 hours | 2024-03-13 21:46

<!-- With per -->

- [ ] coding for 4 hours #diff/hard #timer/0/4h #per/1h

<!-- History file -->

5 | coding for 4 hours | 2024-03-13 21:46
5 | coding for 4 hours | 2024-03-13 21:46
5 | coding for 4 hours | 2024-03-13 21:46
5 | coding for 4 hours | 2024-03-13 21:46
```

### Counters

You can use counters in common and recurring tasks.
If counter has a goal and it reaches it, the task automatically became done.

#### With `#bind`

Unit is used when you want to save counter using #bind.

```markdown
<!-- Unit usage -->

- [/] challange code everyday for 4 hours! #count/2/4/hour #bind/coding

<!-- In daily note YAML frontmatter -->

coding: 2 hours
```

#### With `#diff`

If task has `#diff` and `#count` on every counter increase you earned coins based on difficulty level.

> [!NOTE]
> If you click on decrease counter it will take coins back.

```markdown
<!-- Difficulty usage -->

- [/] challange code everyday for 4 hours! #count/3/4 #diff/hard

<!-- In history file -->

5 | challange code everyday for 4 hours! | 2024-03-13 21:46
5 | challange code everyday for 4 hours! | 2024-03-13 21:46
5 | challange code everyday for 4 hours! | 2024-03-13 21:46

<!-- If you click decrease one time -->

-5 | challange code everyday for 4 hours! | 2024-03-13 21:50
5 | challange code everyday for 4 hours! | 2024-03-13 21:46
5 | challange code everyday for 4 hours! | 2024-03-13 21:46
5 | challange code everyday for 4 hours! | 2024-03-13 21:46
```

#### With `#every`

In recurring tasks when you reach goal or complete task counter resets to zero.

```markdown
<!-- You're clicking on increase counter in UI -->

- [/] challange code everyday for 4 hours! #count/3/4 #every/day #diff/hard

<!-- It saves to history -->

5 | challange code everyday for 4 hours! | 2024-03-13 21:46
5 | challange code everyday for 4 hours! | 2024-03-13 21:46
5 | challange code everyday for 4 hours! | 2024-03-13 21:46
5 | challange code everyday for 4 hours! | 2024-03-13 21:46

<!-- Or without #diff -->

0 | challange code everyday for 4 hours! | 2024-03-13 21:46
0 | challange code everyday for 4 hours! | 2024-03-13 21:46
0 | challange code everyday for 4 hours! | 2024-03-13 21:46
0 | challange code everyday for 4 hours! | 2024-03-13 21:46

<!-- When you reach counter goal, counter set to completed -->

- [x] challange code everyday for 4 hours! #count/4/4 #every/day #diff/hard

<!-- Task resets to zeros, but It would appear in UI only on next day -->

- [ ] challange code everyday for 4 hours! #count/0/4 #every/day #diff/hard
```

#### With `#per`

```markdown
<!-- Without per -->

- [ ] do a push up #diff/medium #count/0/20

<!-- History file -->

2.5 | do a push up | 2024-03-13 21:46
...20

<!-- With per -->

- [ ] do a push up #diff/medium #count/0/20 #per/5

<!-- History file -->

2.5 | do a push up | 2024-03-13 21:46
2.5 | do a push up | 2024-03-13 21:46
2.5 | do a push up | 2024-03-13 21:46
2.5 | do a push up | 2024-03-13 21:46
```

### Recurrence

For recurrence you already know we use #every tag, a recurring task show again based on history file.  
List of recurrence durations (instead of 1 you can use another number)

- Hourly - hour, h, 1h, 1hour
- Daily - day, d, 1d, 1day
- Weekly - week, w, 1w, 1week
- Monthly - month, m, 1m, 1month
- Annual - year, y, 1y, 1year

If you just leave number it mean that tasks show in day of month #every/12

Also you can set certain time when you want to show task in UI #every/week/1400

If a task doesn't have `#diff` tag in history it saves with `0` balance change.

```markdown
<!-- Create recurring task -->

- [ ] coding for 4 hours #every/day

<!-- Set in progress -->

- [/] coding for 4 hours #every/day

<!-- Complete task -->

- [x] coding for 4 hours #every/day

<!-- It saved to history and resets to zeros -->

- [ ] coding for 4 hours #every/day
```

#### How does it work?

- You create task with #every tag, it shows in UI.
- You done your recurring task.
- Task body saved to history.
- Task counter, timer etc sets to zero value.
- If task is not completed in vault and it is in history file, it shows again after certain time.

#### With `#notify`

Show notification when task appears again.

## Rewards

On earned coins you can buy rewards.
To add rewards you need to create rewards file.  
By default it `rewards.md` but you can change it in settings.
In rewards file you need to define your rewards.  
Format of Reward row `rewards name | price | description` in rewards file.  
If you have a desire to add a comment use `|` symbol e.g. `| my favorite rewards`.

> [!NOTE]
> Markdown comments `<!-- comment -->` don't work in rewards file.

```markdown
| shows `📺️ watch an episode` for 1 coin
📺️ watch an episode

| shows `🍦 Ice cream` for 10 coins
🍦 Ice cream | 10

| shows `🍬 candy` with desc `earn and eat it.` for 1 coin
🍬 candy | earn and eat it.

| shows `🌴 relax one day` with desc `you work hard you deserve it.` for 1500 coins
🌴 relax one day | 1500 | you worked hard you deserve it.
```

## History

History file stores all your earnings and spending.  
Task is earning one if it has #diff tag with property difficulty.  
By default it `history.md` but you can change it in settings.  
By default you don't need to do anything with this file.  
But if you want to correct some data or cheat sometimes, you're welcome... cheater \*bruh\*.  
Format of history row: `balance change | task body | date`

Saved to history only if:

- A task with `#diff` tag
- Recurring task
- Reward

## Inspiration

- [obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)
- [obsidian-pomodoro-timer](https://github.com/eatgrass/obsidian-pomodoro-timer)
- [Habitica](https://habitica.com/)

## Can I contribute?

Yes, of course!

## Can I sponsor you?

Yes, almost... Currently I'm living in Ukraine and I cannot recive money through:

- Buy Me A Coffee
- Ko-Fi
- GitHub sponsor

But I have crypto wallets:

- USDT (TRC20) - TTRdv6sPzezwEWraWcDKWjZNLgyNaof2kb
- USDT (ERC20) - 0xab696770a07f1f8e5521ea34181fc157c916f3de
- USDT (SOL) - Aa6A2UMq9MuUN71yCSkg3J8Wxy6kfUtK2zSNSg3ten9u
- Binance Pay - Binance ID - 281874667
