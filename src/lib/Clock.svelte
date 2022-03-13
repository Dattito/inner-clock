<script lang="ts">
	import { onDestroy } from 'svelte';

	let date = new Date();
	$: seconds = date.getSeconds();
	$: minutes = date.getMinutes();
	$: hours = date.getHours();

	const intervall = setInterval(() => (date = new Date()), 500);
	onDestroy(() => clearInterval(intervall));
</script>

{#each ['🧑‍🦰', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] as n, i}
	<div
		id={`n-${n}`}
		class="absolute origin-bottom"
		style={`transform: translate(${7 * Math.sin(Math.PI * 2 * (1 / 24) * i)}rem, ${
			-7 * Math.cos(Math.PI * 2 * (1 / 24) * i)
		}rem)`}
	>
		<div class="relative">
			<div class="absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 font-bold">
				{n}
			</div>
		</div>
	</div>
	<!-- <div
					id={`n-${n}-path`}
					class="absolute border-[1px] border-black h-32 w-0 origin-bottom bottom-0"
					style={`transform: rotate(${30 * n}deg)`}
				/> -->
{/each}

<div class="scale-75">
	<div
		id="seconds"
		class="absolute rounded border-[1px] h-24 w-0 left-1/2 origin-top border-red-500 bg-red-500"
		style={`transform: rotate(${seconds * 6 + 180}deg)`}
	/>
	<div
		id="minutes"
		class="absolute rounded border-[1px] h-20 w-0 left-1/2 origin-top border-green-500 bg-green-500"
		style={`transform: rotate(${minutes * 6 + 180}deg)`}
	/>
	<div
		id="hours"
		class="absolute rounded border-[2px] h-16 w-0 left-1/2 origin-top border-green-500 bg-green-500"
		style={`transform: rotate(${hours * 30 + 180}deg)`}
	/>
</div>
