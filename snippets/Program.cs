using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;

namespace snippets {

	class Program {

		class SnippetModel {
			public string Name { get; set; }
			public MethodInfo MainMethod { get; set; }
		}

		static void Main(string[] args) {

			var snippets = discoverSnippets();

			while (true) {
				printSnippets(snippets);
				var snippet = getSnippetChoice(snippets);
				if (snippet == null) {
					break;
				}
				runSnippet(snippet);
			}
		}

		private static List<SnippetModel> discoverSnippets() {

			var assembly = typeof(Program).Assembly;
			var snippets = new List<SnippetModel>();

			foreach (var classType in assembly.GetTypes().Where(t => t.IsClass && t != typeof(Program))) {
				var mainMethod = classType.GetMethod("Main", BindingFlags.Static | BindingFlags.NonPublic);
				if (mainMethod != null) {
					snippets.Add(new SnippetModel() {
						Name = classType.FullName,
						MainMethod = mainMethod
					});
				}
			}

			return snippets;
		}

		private static void printSnippets(List<SnippetModel> snippets) {
			Console.WriteLine("Available snippets");
			Console.WriteLine("------------------");
			Console.WriteLine();
			for (int i = 0; i < snippets.Count; i++) {
				Console.WriteLine(string.Format("[{0,2}] {1}", i, snippets[i].Name));
			}
			Console.WriteLine();
		}

		private static SnippetModel getSnippetChoice(List<SnippetModel> snippets) {
			SnippetModel selectedSnippet = null;
			while (selectedSnippet == null) {
				Console.WriteLine("Enter the snippet number to run, or Q to quit:");
				var input = Console.ReadLine();
				if (input.Equals("Q", StringComparison.OrdinalIgnoreCase)) {
					return null;
				}
				if (int.TryParse(input, out int index) && index >= 0 && index < snippets.Count) {
					selectedSnippet = snippets[index];
				}
			}
			return selectedSnippet;
		}

		private static void runSnippet(SnippetModel selectedSnippet) {
			var parameters = new List<object>();
			if (selectedSnippet.MainMethod.GetParameters().Length > 0) {
				parameters.Add(new string[0]);
			}
			var sw = Stopwatch.StartNew();
			try {
				selectedSnippet.MainMethod.Invoke(null, parameters.ToArray());
			} catch (Exception ex) {
				Console.WriteLine(ex);
			}
			Console.WriteLine();
			Console.WriteLine();
			Console.WriteLine($"Snippet completed in {sw.Elapsed}");
			Console.WriteLine();
			Console.WriteLine();
		}
	}
}
